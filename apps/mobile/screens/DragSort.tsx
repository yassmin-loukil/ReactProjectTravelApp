import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

import { DragSortableView } from "react-native-drag-sort";

const { width } = Dimensions.get("window");
const parentWidth = width - 18;
const childrenWidth = 76;
const childrenHeight = 76;
const marginChildrenTop = 7;
const marginChildrenBottom = 0;
const marginChildrenLeft = 0;
const marginChildrenRight = 7;

const TEST_DATA = [
  {
    id: 1,
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  },
  {
    id: 6,
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  },
  {
    id: 7,
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
  },
  {
    id: 8,
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
  },
  {
    id: 9,
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
  },
  {
    id: 10,
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
  },
  {
    id: 11,
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
  },
];

export default function DragSort() {
  const [scrollEnabled, setscrollEnabled] = useState(true);
  const [isEnterEdit, setisEnterEdit] = useState(false);
  const [data, setData] = useState(TEST_DATA);

  const renderItem = (item, index) => {
    // console.log(item.id);
    // console.log(index)

    if (isEnterEdit) {
      return (
        <View key={item.id} style={styles.item}>
          <View style={styles.item_children}>
            <Image style={styles.item_icon} source={{ uri: item.src }} />
          </View>
        </View>
      );
    } else {
      return (
        <View key={item.id} style={styles.item}>
          <View style={styles.item_children}>
            <Image style={styles.item_icon} source={{ uri: item.src }} />
            <Text style={styles.txt}>test</Text>
          </View>
        </View>
      );
    }
  };
  return (
    <ScrollView
      ref={(scrollView) => (this.scrollView = scrollView)}
      scrollEnabled={scrollEnabled}
      style={styles.container}
    >
      <View style={styles.sort}>
        <DragSortableView
          dataSource={TEST_DATA}
          parentWidth={parentWidth}
          childrenWidth={childrenWidth}
          childrenHeight={childrenHeight}
          marginChildrenTop={marginChildrenTop}
          marginChildrenBottom={marginChildrenBottom}
          marginChildrenLeft={marginChildrenLeft}
          marginChildrenRight={marginChildrenRight}
          onDragStart={(startIndex, endIndex) => {
            if (!isEnterEdit) {
              setisEnterEdit(true);
              setscrollEnabled(false);
            } else {
              setscrollEnabled(false);
            }
          }}
          onDragEnd={(startIndex, endIndex) => {
            setscrollEnabled(true);
            console.log("startIndex ", startIndex);
            console.log("endIndex ", endIndex);
          }}
          onDataChange={(data) => {
            // delete or add data to refresh
            if (data.length !== data) {
              setData(data);
            }
          }}
          onClickItem={(data, item, index) => {
            // click delete
            if (isEnterEdit) {
              const newData = [...data];
              newData.splice(index, 1);
              setData(newData);
            }
          }}
          keyExtractor={(item, index) => item.src} // FlatList作用一样，优化
          renderItem={(item, index) => {
            return renderItem(item, index);
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  txt: {
    fontSize: 18,
    lineHeight: 24,
    padding: 5,
  },
  sort: {
    marginLeft: 20,
  },
  item: {
    width: childrenWidth,
    height: childrenHeight,
  },
  item_children: {
    width: childrenWidth - 8,
    height: childrenHeight - 8,
    backgroundColor: "#f0ffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 8,
  },
  item_delete_icon: {
    width: 14,
    height: 14,
    position: "absolute",
    right: 1,
    top: 1,
  },
  item_icon: {
    width: childrenWidth - 4 - 8,
    height: childrenHeight - 4 - 8,
    resizeMode: "contain",
    position: "absolute",
  },
});
