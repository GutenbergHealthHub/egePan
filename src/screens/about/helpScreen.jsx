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
        <Banner
          nav={navigation}
          title="Anlaufstellen für akute Krisen"
          noMenu
        />
        <View style={{ ...localStyle.flexi, ...localStyle.wrapper }}>
          <ScrollIndicatorWrapper
            contentData={
              <View style={localStyle.content}>
                <Text style={localStyle.p}>
                  In als ausweglos empfundenen Situationen und bei konkreten
                  lebensmüden Gedanken können Sie sich auch 24 Stunden und an
                  allen Tagen der Woche und des Wochenendes in Ihrer regional
                  zuständigen psychiatrischen Klinik vorstellen für ein
                  ambulantes Beratungsgespräch oder die Planung einer
                  stationären Behandlung.
                </Text>
                <Text style={localStyle.p}>
                  In Notfällen steht Ihnen täglich von 0 bis 24 Uhr die
                  Notfallambulanz der Klinik für Psychiatrie und Psychotherapie
                  des LMU Klinikums zur Verfügung. Unsere Dienstärzt*innen
                  leisten Unterstützung in psychischen Krisensituationen und
                  vermitteln weitere Unterstützungsangebote.
                </Text>
                <Text style={localStyle.p}>
                  Klinik und Poliklinik für Psychiatrie und Psychotherapie,
                  {"\n"}
                  LMU Klinikum Nußbaumstraße 7, 80336 München{"\n"}
                  <TouchableOpacity
                    onPress={() => Linking.openURL("tel://089 4400 55511")}
                  >
                    <Text style={localStyle.link}>089 4400 55511</Text>
                  </TouchableOpacity>
                </Text>
                <Text style={localStyle.p}>
                  Weitere psychiatrische Notfallambulanzen für Erwachsene in
                  München (geöffnet täglich 0-24 Uhr):
                </Text>
                <Text style={localStyle.p}>
                  kbo-Isar-Amper-Klinikum, München-Ost{"\n"}
                  Vockestr. 72, 85540 Haar{"\n"}
                  <TouchableOpacity
                    onPress={() => Linking.openURL("tel://089 45620")}
                  >
                    <Text style={localStyle.link}>089 45620</Text>
                  </TouchableOpacity>
                  <Text>{"\n"}</Text>
                  <TouchableOpacity
                    onPress={() => Linking.openURL("www.kbo-iak.de")}
                  >
                    <Text style={localStyle.link}>www.kbo-iak.de</Text>
                  </TouchableOpacity>
                </Text>

                <Text style={localStyle.p}>
                  kbo-Isar-Amper-Klinikum, Atriumhaus{"\n"}
                  Bavariastr. 11, 80336 München{"\n"}
                  <TouchableOpacity
                    onPress={() => Linking.openURL("tel:// 089 76780")}
                  >
                    <Text style={localStyle.link}>089 76780</Text>
                  </TouchableOpacity>
                  <Text>{"\n"}</Text>
                  <TouchableOpacity
                    onPress={() => Linking.openURL("www.kbo-iak.de")}
                  >
                    <Text style={localStyle.link}>www.kbo-iak.de</Text>
                  </TouchableOpacity>
                </Text>
                <Text style={localStyle.p}>
                  Klinik und Poliklinik für Psychiatrie und Psychotherapie{"\n"}
                  Klinikum rechts der Isar{"\n"}
                  Ismaninger Str. 22, 81675 München{"\n"}
                  von 08.30 - 16.30 Uhr){"\n"}
                  <TouchableOpacity
                    onPress={() => Linking.openURL("tel://089 41404241")}
                  >
                    <Text style={localStyle.link}>089 41404241</Text>
                  </TouchableOpacity>
                  <Text>
                    {"\n"}Außerhalb dieser Zeit:{"\n"}
                  </Text>
                  <TouchableOpacity
                    onPress={() => Linking.openURL("tel://089 41404210")}
                  >
                    <Text style={localStyle.link}>089 4140421</Text>
                  </TouchableOpacity>
                  <Text>{"\n"}</Text>
                  <TouchableOpacity
                    onPress={() => Linking.openURL("www.psykl.mri.tum.de")}
                  >
                    <Text style={localStyle.link}>www.psykl.mri.tum.de</Text>
                  </TouchableOpacity>
                </Text>
                <Text style={localStyle.p}>
                  Auf weitere Unterstützungsangebote können Sie über die
                  folgenden Links zugreifen
                </Text>
                <Text>
                  LMU Klinikum: Anlaufstellen und Empfehlungen - Psychische
                  Belastungen während der COVID-19-Pandemie
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.lmu-klinikum.de/psychiatrie-und-psychotherapie/aktuelles/covid-19-psychische-belastungen/b0426e274195ac39"
                    )
                  }
                >
                  <Text style={localStyle.link}>
                    https://www.lmu-klinikum.de/psychiatrie-und-psychotherapie/aktuelles/covid-19-psychische-belastungen/b0426e274195ac39
                  </Text>
                </TouchableOpacity>

                <Text style={localStyle.p}>
                  Tipps und Empfehlungen zum Umgang mit den psychischen Folgen
                  der Corona-Pandemie:
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL("https://lir-mainz.de/corona-uebersicht")
                  }
                >
                  <Text style={localStyle.link}>
                    https://lir-mainz.de/corona-uebersicht
                  </Text>
                </TouchableOpacity>
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
    textDecorationLine: "underline",
    paddingRight: "25%",
  },
  p: {
    marginVertical: 10,
  },
});
export default HelpScreen;
