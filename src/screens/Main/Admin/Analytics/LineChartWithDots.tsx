import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import sizeHelper from '../../../../utils/Helpers';
import { theme } from '../../../../utils/Themes';

const screenWidth = Dimensions.get('window').width;

const LineChartWithCustomLegend = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [30, 28, 90, 15, 40, 50, 38],
        color: (opacity = 1) => `rgba(106, 117, 255, ${opacity})`, // Students
        strokeWidth: 2,
      },
      {
        data: [45, 88, 87, 84, 20, 42, 90],
        color: (opacity = 1) => `rgba(105, 211, 158, ${opacity})`, // Coaches
        strokeWidth: 2,
      },
      {
        data: [60, 68, 75, 89, 85, 66, 98],
        color: (opacity = 1) => `rgba(255, 177, 68, ${opacity})`, // Parents
        strokeWidth: 2,
      },
    ],
    // ❌ Hide built-in legend by not using it here
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(80, 80, 80, ${opacity})`,
    propsForDots: {
      r: '5',
      strokeWidth: '2',
      stroke: '#ffffff',
    },
    propsForBackgroundLines: {
      strokeDasharray: '5',
      stroke: '#ccc',
    },
  };

  return (
    <View    style={{
        padding: sizeHelper.calWp(30),
        borderRadius: sizeHelper.calWp(50),
        borderWidth: 1,
        borderColor:theme.colors.black+"20",
        gap:sizeHelper.calHp(20)
      }}>
      <Text style={styles.title}>Active Users</Text>
      <LineChart
        data={data}
        width={screenWidth-sizeHelper.calWp(100)}
        height={260}
        chartConfig={chartConfig}
        bezier
        withShadow={false}  // ✅ This removes the shadow under the line
        style={styles.chart}
      />

      {/* ✅ Custom Legend at Bottom */}
      <View style={styles.legendContainer}>
        <LegendItem color="#6A75FF" label="Students" />
        <LegendItem color="#69D39E" label="Coaches" />
        <LegendItem color="#FFB144" label="Parents" />
      </View>
    </View>
  );
};

const LegendItem = ({ color, label }) => (
  <View style={styles.legendItem}>
    <View style={[styles.legendDot, { backgroundColor: color }]} />
    <Text style={styles.legendText}>{label}</Text>
  </View>
);

export default LineChartWithCustomLegend;

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    // margin: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  chart: {
    alignItems: 'flex-start',
    marginLeft:sizeHelper.calWp(-20),
    // borderRadius:100,

    // borderRadius: 16,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:sizeHelper
    .calWp(10)
  },
  legendDot: {
    width: sizeHelper.calWp(14),
    height: sizeHelper.calWp(14),
    borderRadius: sizeHelper.calWp(14),
  },
  legendText: {
    fontSize: 13,
    color: '#333',
  },
});
