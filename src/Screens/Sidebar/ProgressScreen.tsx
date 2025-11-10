// screens/ProgressScreen.tsx
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Svg, { Path, Rect } from 'react-native-svg';
import { progressStyles as s } from '../../../style/progresstyles';

const moodPoints = [2.8, 2.4, 2.6, 2.2, 2.7, 1.8, 3.2, 2.1, 3.0]; // mock data

const toLinePath = (data: number[], w: number, h: number) => {
  if (!data.length) return '';
  const max = 4, min = 1;
  const dx = w / (data.length - 1 || 1);
  const scaleY = (v: number) => h - ((v - min) / (max - min)) * h;
  return data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * dx} ${scaleY(v)}`).join(' ');
};

export default function ProgressScreen() {
  const chartW = wp(76);
  const chartH = hp(16);

  return (
    <ImageBackground source={require('../../../assets/Image/background.png')} style={s.bg} imageStyle={{ resizeMode: 'cover' }}>
      <View style={s.header}>
        <TouchableOpacity style={s.backBtn} activeOpacity={0.7}>
          <Text style={s.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle}>Progress</Text>
        <View style={{ width: wp(9) }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: hp(4) }}>
        {/* Mood Card */}
        <View style={s.card}>
          <Text style={s.cardTitle}>Mood Over Time</Text>
          <Text style={s.subLabel}>Mood Score</Text>
          <Text style={s.bigNumber}>7.2</Text>
          <Text style={s.deltaText}>Last 30 Days <Text style={s.deltaUp}>+12%</Text></Text>

          <View style={s.chartWrap}>
            <Svg width={chartW} height={chartH}>
              <Path d={`M 0 ${chartH - 1} L ${chartW} ${chartH - 1}`} stroke="#D1E4DA" strokeWidth={1} />
              <Path d={toLinePath(moodPoints, chartW, chartH)} stroke="#3C8D75" strokeWidth={3} fill="none" />
            </Svg>
          </View>

          <View style={s.axisRow}>
            <Text style={s.axisText}>1W</Text>
            <Text style={s.axisText}>2W</Text>
            <Text style={s.axisText}>3W</Text>
            <Text style={s.axisText}>4W</Text>
          </View>
        </View>

        {/* Stress Card */}
        <View style={s.card}>
          <Text style={s.cardTitle}>Stress Levels</Text>
          <Text style={s.subLabel}>Stress Level</Text>
          <Text style={s.bigNumber}>3.5</Text>
          <Text style={s.deltaText}>Last 30 Days <Text style={s.deltaDown}>-8%</Text></Text>

          <View style={s.chartWrap}>
            <Svg width={chartW} height={hp(14)}>
              {[0, 1, 2, 3].map((i) => {
                const barW = wp(6);
                const gap = wp(7);
                const x = i * (barW + gap);
                const h = [hp(10), hp(10.8), hp(10.2), hp(10.6)][i];
                return (
                  <Rect key={i} x={x} y={hp(14) - h} width={barW} height={h} rx={wp(1.2)} fill="#E7F1EC" />
                );
              })}
            </Svg>
          </View>

          <View style={s.axisRow}>
            <Text style={s.axisText}>1W</Text>
            <Text style={s.axisText}>2W</Text>
            <Text style={s.axisText}>3W</Text>
            <Text style={s.axisText}>4W</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
