import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Circle, G, Line } from "react-native-svg";
import CustomText from "../../../../components/Text";
import { fonts } from "../../../../utils/Themes/fonts";
import sizeHelper from "../../../../utils/Helpers";
import { theme } from "../../../../utils/Themes";

const UserDistributionChart = () => {
  const data = [
    {
      key: 1,
      amount: 65,
      svg: { fill: "#6A75FF" }, // Students
      label: "Students – 65%",
    },
    {
      key: 2,
      amount: 25,
      svg: { fill: "#6FD195" }, // Coaches
      label: "Coaches – 25%",
    },
    {
      key: 3,
      amount: 10,
      svg: { fill: "#FFAE4C" }, // Parents
      label: "Parents – 10%",
    },
  ];

  return (
    <View
      style={{
        padding: sizeHelper.calWp(30),
        borderRadius: sizeHelper.calWp(50),
        borderWidth: 1,
        overflow:"hidden",
        borderColor:theme.colors.black+"20",
      }}
    >
      <CustomText
        text={"User Destriution"}
        fontFam={fonts.Inter_Bold}
        fontWeight="700"
        //   color={theme.colors.primary}
        size={30}
      />
      <PieChart
        style={{ height: 200 }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        spacing={0}
        outerRadius={"95%"}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                width: sizeHelper.calWp(12),
                height: sizeHelper.calWp(12),
                backgroundColor: item.svg.fill,
                marginRight: 5,
                borderRadius: sizeHelper.calWp(12),
              }}
            />
            <CustomText
              text={item?.label}
              //   fontFam={fonts.Inter_Bold}
              //   fontWeight="700"
              //   color={theme.colors.primary}
              //   size={30}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default UserDistributionChart;
