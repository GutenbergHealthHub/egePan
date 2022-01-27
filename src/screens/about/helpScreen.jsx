import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import config from "../../config/configProvider";
import Banner from "../../components/banner/banner";
import ScrollIndicatorWrapper from "../../components/scrollIndicatorWrapper/scrollIndicatorWrapper";

let localStyle;

class HelpScreen extends PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <View style={localStyle.wrapper}>
        <Banner nav={navigation} title="Hilfe in Notfällen" />
        <View style={{ ...localStyle.flexi, ...localStyle.wrapper }}>
          <ScrollIndicatorWrapper
            contentData={
              <View style={localStyle.content}>
                <Text style={localStyle.infoText}>
                  Wenn Sie sich in einer Situation befinden, die Sie nicht mehr
                  ertragen können, holen Sie sich auf jeden Fall Hilfe. Sollten
                  Sie das Bedürfnis nach professioneller Unterstützung haben,
                  können Sie sich an die folgenden Anlaufstellen wenden:
                  {"\n\n"}Patiententelefon der kassenärztlichen Vereinigung
                  (KV):
                </Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL("tel://116117")}
                >
                  <Text style={localStyle.link}>116117</Text>
                </TouchableOpacity>
                <Text style={localStyle.infoText}>
                  Webseite der kassenärztlichen Vereinigung – Service für
                  Patienten:
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.kbv.de/html/service_fuer_patienten.php"
                    )
                  }
                >
                  <Text style={localStyle.link}>
                    https://www.kbv.de/html/service_fuer_patienten.php
                  </Text>
                </TouchableOpacity>
                <Text style={localStyle.infoText}>
                  Psychotherapeutensuche der Landespsychotherapeutenkammer: -
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.lpk-rlp.de/psychotherapeutensuche.html"
                    )
                  }
                >
                  <Text style={localStyle.link}>
                    https://www.lpk-rlp.de/psychotherapeutensuche.html
                  </Text>
                </TouchableOpacity>
                <Text style={localStyle.infoText}>Telefon Seelsorge:</Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL("tel://0800/111 0 111")}
                >
                  <Text style={localStyle.link}>0800/111 0 111</Text>
                </TouchableOpacity>
                <Text>oder</Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL("tel://0800/111 0 222")}
                >
                  <Text style={localStyle.link}>0800/111 0 222</Text>
                </TouchableOpacity>
                <Text style={localStyle.infoText}>
                  Telefon-Seelsorge Nightline:
                </Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL("tel://06221 18 47 08")}
                >
                  <Text style={localStyle.link}>06221 18 47 08</Text>
                </TouchableOpacity>
                <Text style={localStyle.infoText}>
                  In als ausweglos empfundenen Situationen und bei konkreten
                  lebensmüden Gedanken können Sie sich auch 24 Stunden und an
                  allen Tagen der Woche und des Wochenendes in Ihrer regional
                  zuständigen psychiatrischen Klinik vorstellen für ein
                  ambulantes Beratungsgespräch oder die Planung einer
                  stationären Behandlung.
                </Text>
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

localStyle = StyleSheet.create({
  wrapper: {
    height: "100%",
    flexDirection: "column",
    backgroundColor: config.theme.values.defaultBackgroundColor,
  },
  content: {
    marginTop: config.appConfig.scaleUiFkt(20),
    marginBottom: config.appConfig.scaleUiFkt(20),
    marginLeft: config.appConfig.scaleUiFkt(40),
    marginRight: config.appConfig.scaleUiFkt(40),
  },

  flexi: {
    flex: 3,
  },

  title: {
    ...config.theme.fonts.title,
    textAlign: "center",
    alignSelf: "center",
    color: config.theme.values.defaultTitleTextColor,
  },

  top: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: config.appConfig.scaleUiFkt(15),
    marginBottom: config.appConfig.scaleUiFkt(35),
  },

  infoText: {
    alignSelf: "auto",
    color: config.theme.colors.accent4,
    ...config.theme.fonts.body,
    fontSize: 14,
  },

  titleText: {
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
    ...config.theme.fonts.header2,
  },
  link: {
    color: config.theme.colors.primary,
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 10,
  },
});
export default HelpScreen;
