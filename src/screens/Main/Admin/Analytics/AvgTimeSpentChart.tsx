import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import sizeHelper from '../../../../utils/Helpers';
import { theme } from '../../../../utils/Themes';
import CustomText from "../../../../components/Text";
import { fonts } from '../../../../utils/Themes/fonts';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Students', 'Coaches', 'Parents'],
  datasets: [
    {
      data: [85, 65, 45],
      colors: [
        (opacity = 1) => `#7086FD`, // Students (Blue)
        (opacity = 1) => `#FFAE4C`,   // Coaches (Orange)
        (opacity = 1) => `#6FD195`,  // Parents (Green)
      ],
    },
  ],
};

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 1.5,
  propsForBackgroundLines: {
    strokeDasharray: '4', // solid lines
    stroke: '#ccc',
  },
};

const AvgTimeSpentChart = () => {
  return (
    <View
    style={{
        padding: sizeHelper.calWp(30),
        borderRadius: sizeHelper.calWp(50),
        borderWidth: 1,
        overflow:"hidden",
        borderColor:theme.colors.black+"20",
        gap:sizeHelper.calHp(20)
      }}
    >
        <CustomText
        text={"Avg. Time Spent"}
        fontFam={fonts.Inter_Bold}
        fontWeight="700"
        //   color={theme.colors.primary}
        size={30}
      />

      <BarChart
        data={data}
        width={screenWidth - 40}
        height={220}
        yAxisSuffix=" Min"
        chartConfig={chartConfig}
        fromZero
        showValuesOnTopOfBars
        withInnerLines
        withHorizontalLabels
        style={{
          borderRadius: 16,
        }}
        segments={5}
        flatColor={true}
        // Assign custom colors to each bar
        withCustomBarColorFromData={true}
        barColors={['#6A75FF', '#FFB144', '#69D39E']}
      />
    </View>
  );
};

export default AvgTimeSpentChart;
