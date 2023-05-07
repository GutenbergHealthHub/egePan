import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Slider } from "react-native-elements";
import config from "../../config/configProvider";
import Banner from "../../components/banner/banner";
import ScrollIndicatorWrapper from "../../components/scrollIndicatorWrapper/scrollIndicatorWrapper";

class SummaryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: {
        anxiety: null,
        depressiveness: null,
        stress: null,
        burnout: null,
      },
    };
  }

  componentDidMount() {
    this.calculateScores();
  }

  calculateScores = () => {
    const { questionnaireItemMap } = this.props;
    const scores = {};
    scores.anxiety =
      parseInt(questionnaireItemMap["1.1.3"].answer.code, 10) +
      parseInt(questionnaireItemMap["1.1.4"].answer.code, 10);

    scores.depressiveness =
      parseInt(questionnaireItemMap["1.1.1"].answer.code, 10) +
      parseInt(questionnaireItemMap["1.1.2"].answer.code, 10);

    scores.stress =
      parseInt(questionnaireItemMap["1.2.1"].answer.code, 10) +
      parseInt(questionnaireItemMap["1.2.2"].answer.code, 10) +
      parseInt(questionnaireItemMap["1.2.3"].answer.code, 10) +
      parseInt(questionnaireItemMap["1.2.4"].answer.code, 10);

    scores.burnout =
      parseInt(questionnaireItemMap["1.3.1"].answer.code, 10) +
      parseInt(questionnaireItemMap["1.3.2"].answer.code, 10) +
      parseInt(questionnaireItemMap["1.3.3"].answer.code, 10) +
      parseInt(questionnaireItemMap["1.3.4"].answer.code, 10) +
      parseInt(questionnaireItemMap["1.3.5"].answer.code, 10) +
      parseInt(questionnaireItemMap["1.3.6"].answer.code, 10);

    this.setState(() => ({ scores: { ...scores } }));
  };

  render() {
    const { navigation, exportAndUploadQuestionnaireResponse } = this.props;

    const { scores } = this.state;
    return (
      <View style={{ ...localStyle.flexi, ...localStyle.wrapper }}>
        {/* render the top banner */}
        <Banner nav={navigation} title="Zusammenfassung" noWayBack />
        <View style={{ flex: 3 }}>
          <ScrollIndicatorWrapper
            contentData={
              <View style={{ ...localStyle.body }}>
                <Text
                  style={{
                    fontSize: 18,
                    ...localStyle.title,
                  }}
                >
                  Liebe Teilnehmende,{"\n\n"}erfahren Sie nun Ihren
                  individuellen Gesundheitszustand in vier Indikatoren für Ihre
                  psychische Gesundheit.
                </Text>
                <Text style={localStyle.p}>
                  Dies ist eine automatisch generierte Auswertung Ihrer
                  Antwortdaten. Bitte beachten Sie, dass Sie diese nicht erneut
                  aufrufen können, sobald Sie sie geschlossen haben. Da man von
                  den Daten nicht auf Ihre Person zurückschließen kann, können
                  wir Ihre Auswertung nach Beendigung der Befragung nicht erneut
                  erstellen. Falls Sie Ihre Auswertung zu einem späteren
                  Zeitpunkt noch einmal ansehen möchten, speichern Sie sich
                  diese bitte, z. B. mithilfe von Bildschirmfotos.
                </Text>
                <Text style={localStyle.title}>Generalisierte Angst:</Text>
                <Text style={{ ...localStyle.p }}>
                  Als generalisierte Angst wird eine anhaltende Angst
                  verstanden, die ohne einen speziellen Auslöser auftritt. Sie
                  ist gekennzeichnet durch Gefühle von Nervosität und
                  Anspannung, unbegründete Sorgen sowie körperliche Reaktionen
                  wie Herzklopfen, Übelkeit oder Schwitzen.
                  {"\n\n"}
                  Meine persönliche Ausprägung von generalisierter Angst:
                </Text>
                <View pointerEvents="box-only">
                  <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={6}
                    minimumTrackTintColor={config.theme.colors.accent1}
                    maximumTrackTintColor={config.theme.colors.accent1}
                    accessibilityHint={`0${config.text.accessibility.questionnaire.sliderFieldEquals}Sehr wenig ängstlich${config.text.accessibility.questionnaire.sliderFieldAnd}6${config.text.accessibility.questionnaire.sliderFieldEquals}Sehr ängstlich`}
                    value={scores.anxiety}
                    thumbProps={{
                      children: (
                        <View style={localStyle.thumbContainer}>
                          <Text style={localStyle.thumbLabel}>
                            {scores.anxiety}
                          </Text>
                        </View>
                      ),
                    }}
                  />
                </View>
                <View style={localStyle.sliderLabel}>
                  <Text style={localStyle.sliderTextMin}>
                    0 (sehr wenig ängstlich)
                  </Text>
                  <Text style={localStyle.sliderTextMax}>
                    6 (sehr ängstlich)
                  </Text>
                </View>
                <Text style={localStyle.p}>
                  Was bedeutet das?
                  {"\n\n"}
                  Eine Ausprägung von unter 3 ist neutraler Wert, eine
                  Ausprägung von 3 oder mehr ist ein kritischer Wert. In einer
                  vorangegangenen Studie aus Deutschland während der
                  COVID-19-Pandemie im Jahr 2020 lag der mittlere Wert in der
                  Allgemeinbevölkerung bei 1,05 (Männer: 0,89; Frauen: 1,19)
                  [1]. Im Jahr 2018 lag er bei 0,77 (Männer: 0,68; Frauen:
                  0,85)[1].
                </Text>
                <Text style={localStyle.title}>Depressivität</Text>
                <Text style={localStyle.p}>
                  Depressivität beschreibt einen Gefühlszustand, der vor allem
                  durch niedergeschlagene Stimmung, Antriebslosigkeit und den
                  Verlust von Freude an alltäglichen Dingen und Interessen
                  gekennzeichnet ist.
                  {"\n\n"}
                  Meine persönliche Ausprägung von Depressivität:
                </Text>
                <View pointerEvents="box-only">
                  <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={6}
                    minimumTrackTintColor={config.theme.colors.accent1}
                    maximumTrackTintColor={config.theme.colors.accent1}
                    accessibilityHint={`0${config.text.accessibility.questionnaire.sliderFieldEquals}Sehr wenig depressiv${config.text.accessibility.questionnaire.sliderFieldAnd}6${config.text.accessibility.questionnaire.sliderFieldEquals}Stark depressiv`}
                    value={scores.depressiveness}
                    thumbProps={{
                      children: (
                        <View style={localStyle.thumbContainer}>
                          <Text style={localStyle.thumbLabel}>
                            {scores.depressiveness}
                          </Text>
                        </View>
                      ),
                    }}
                  />
                </View>
                <View style={localStyle.sliderLabel}>
                  <Text style={localStyle.sliderTextMin}>
                    0 (sehr wenig depressiv)
                  </Text>
                  <Text style={localStyle.sliderTextMax}>
                    6 (stark depressiv)
                  </Text>
                </View>
                <Text style={localStyle.p}>
                  Was bedeutet das?
                  {"\n\n"}
                  Eine Ausprägung von unter 3 ist neutraler Wert, eine
                  Ausprägung von 3 oder mehr ist ein kritischer Wert. In einer
                  vorangegangenen Studie aus Deutschland während der
                  COVID-19-Pandemie im Jahr 2020 lag der mittlere Wert in der
                  Allgemeinbevölkerung bei 1,05 (Männer: 0,89; Frauen: 1,19)
                  [2]. Im Jahr 2018 lag er bei 0,77 (Männer: 0,68; Frauen: 0,85)
                  [2].
                </Text>
                <Text style={localStyle.title}>Stresserleben:</Text>
                <Text style={{ ...localStyle.p }}>
                  Als negatives Stresserleben bezeichnen wir die körperlichen
                  und seelischen Belastungen, die erlebt werden, wenn man
                  Anforderungen ausgesetzt ist.
                  {"\n\n"}
                  Meine persönliche Ausprägung von Stresserleben
                </Text>
                <View pointerEvents="box-only">
                  <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={16}
                    minimumTrackTintColor={config.theme.colors.accent1}
                    maximumTrackTintColor={config.theme.colors.accent1}
                    accessibilityHint={`0${config.text.accessibility.questionnaire.sliderFieldEquals}Kein Stresserlebnis${config.text.accessibility.questionnaire.sliderFieldAnd}16${config.text.accessibility.questionnaire.sliderFieldEquals}Ausgeprägtes Stresserleben`}
                    value={scores.stress}
                    thumbProps={{
                      children: (
                        <View style={localStyle.thumbContainer}>
                          <Text style={localStyle.thumbLabel}>
                            {scores.stress}
                          </Text>
                        </View>
                      ),
                    }}
                  />
                </View>
                <View style={localStyle.sliderLabel}>
                  <Text style={localStyle.sliderTextMin}>
                    0 (sehr wenig gestresst)
                  </Text>
                  <Text style={localStyle.sliderTextMax}>
                    16 (stark gestresst)
                  </Text>
                </View>
                <Text style={localStyle.p}>
                  Was bedeutet das?
                  {"\n\n"}
                  Eine Ausprägung von 0-4 ist ein positiver Wert und spricht für
                  ein sehr geringes Ausmaß an erlebtem Stress. Eine Ausprägung
                  von 5-8 ist ein neutraler Wert. Eine Ausprägung von 9 oder
                  mehr ist ein kritischer Wert. In einer vorangegangenen Studie
                  aus Deutschland lag der mittlere Wert in der
                  Allgemeinbevölkerung bei 4,8[3].
                </Text>
                <Text style={localStyle.title}>Burnout:</Text>
                <Text style={{ ...localStyle.p }}>
                  Das Burnout-Syndrom ist ein durch chronischen Stress und
                  Überforderung an der Arbeit hervorgerufener Zustand, bei dem
                  es zu Gefühlen von Müdigkeit, Erschöpfung und reduzierter
                  Leistungsfähigkeit kommt.
                  {"\n\n"}
                  Meine persönliche Ausprägung der Anzeichen von Burnout:
                </Text>
                <View pointerEvents="box-only">
                  <Slider
                    step={1}
                    minimumValue={6}
                    maximumValue={30}
                    minimumTrackTintColor={config.theme.colors.accent1}
                    maximumTrackTintColor={config.theme.colors.accent1}
                    accessibilityHint={`6${config.text.accessibility.questionnaire.sliderFieldEquals}Sehr wenig ängstlich${config.text.accessibility.questionnaire.sliderFieldAnd}30${config.text.accessibility.questionnaire.sliderFieldEquals}Sehr ängstlich`}
                    value={scores.burnout}
                    thumbProps={{
                      children: (
                        <View style={localStyle.thumbContainer}>
                          <Text style={localStyle.thumbLabel}>
                            {scores.burnout}
                          </Text>
                        </View>
                      ),
                    }}
                  />
                </View>
                <View style={localStyle.sliderLabel}>
                  <Text style={localStyle.sliderTextMin}>
                    6 (sehr geringe Burnout-Symptome)
                  </Text>
                  <Text style={localStyle.sliderTextMax}>
                    30 (sehr starke Burnout-Symptome)
                  </Text>
                </View>
                <Text style={localStyle.p}>
                  Was bedeutet das?
                  {"\n\n"}
                  Ein Wert zwischen 6 und 11 kann als unterdurchschnittlich bis
                  durchschnittlich bewertet werden und damit als unauffällig im
                  Vergleich zur Allgemeinbevölkerung. Eine Ausprägung zwischen
                  12 und 13 ist ein durchschnittlicher Wert. Ein Wert zwischen
                  14 und 21 kann als durchschnittlich bis überdurchschnittlich
                  eingeordnet werden. Eine Ausprägung ab 22 ist ein
                  überdurchschnittlich hoher Wert. In einer vorangegangenen
                  deutschen Studie unter einem breiten Spektrum von
                  Berufsgruppen lag der mittlere Wert der Mitarbeitenden bei
                  12[4]. Aufgrund der zufälligen Schwankungen der Messungen kann
                  das Ergebnis auch im durchschnittlichen oder auffälligen
                  Bereich liegen.
                </Text>
                <Text style={localStyle.p}>
                  Sollten Sie hierzu weitere Fragen haben, wenden Sie sich gerne
                  an das S.A.M.-Team:
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL("mailto://eap-unimed@unimedizin-mainz.de")
                  }
                >
                  <Text style={localStyle.link}>
                    eap-unimed@unimedizin-mainz.de
                  </Text>
                </TouchableOpacity>
                <Text style={localStyle.p}>
                  Wenn Sie sich in einer Situation befinden, die Sie nicht mehr
                  ertragen können, holen Sie sich auf jeden Fall Hilfe. Sollten
                  Sie das Bedürfnis nach professioneller Unterstützung haben,
                  können Sie sich an die folgenden Anlaufstellen wenden:
                  {"\n\n"}
                  Patiententelefon der kassenärztlichen Vereinigung (KV):
                </Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL("tel://116117")}
                >
                  <Text style={localStyle.link}>116117</Text>
                </TouchableOpacity>
                <Text style={localStyle.p}>
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
                <Text style={localStyle.p}>
                  Psychotherapeutensuche der Landespsychotherapeutenkammer:
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
                <Text style={localStyle.p}>Telefon Seelsorge:</Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL("tel://08001110111")}
                >
                  <Text style={localStyle.link}>0800/111 0 111</Text>
                </TouchableOpacity>
                <Text> oder </Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL("tel://08001110222")}
                >
                  <Text style={localStyle.link}>0800/111 0 222</Text>
                </TouchableOpacity>
                <Text style={localStyle.p}>Telefon-Seelsorge Nightline:</Text>
                <TouchableOpacity
                  onPress={() => Linking.openURL("tel://06221184708")}
                >
                  <Text style={localStyle.link}>06221 18 47 08</Text>
                </TouchableOpacity>
                <Text style={localStyle.p}>
                  In als ausweglos empfundenen Situationen und bei konkreten
                  lebensmüden Gedanken können Sie sich auch 24 Stunden und an
                  allen Tagen der Woche und des Wochenendes in Ihrer regional
                  zuständigen psychiatrischen Klinik vorstellen für ein
                  ambulantes Beratungsgespräch oder die Planung einer
                  stationären Behandlung.
                </Text>
                <Text style={localStyle.p}>
                  Auf weitere Unterstützungsangebote können Sie über die
                  folgenden Links zugreifen:
                </Text>
                <Text style={localStyle.p}>
                  EAP (Employee Assistance Program):
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.unimedizin-mainz.de/eap/index.html"
                    )
                  }
                >
                  <Text style={localStyle.link}>
                    https://www.unimedizin-mainz.de/eap/index.html
                  </Text>
                </TouchableOpacity>
                <Text style={localStyle.p}>
                  Übergreifende Beratungsangebote:
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.unimedizin-mainz.de/eap/beratungsangebote.html"
                    )
                  }
                >
                  <Text style={localStyle.link}>
                    https://www.unimedizin-mainz.de/eap/beratungsangebote.html
                  </Text>
                </TouchableOpacity>
                <Text style={localStyle.p}>
                  Beratungsangebote der Kliniken:
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.unimedizin-mainz.de/eap/beratungsangebote_kliniken.html"
                    )
                  }
                >
                  <Text style={localStyle.link}>
                    https://www.unimedizin-mainz.de/eap/beratungsangebote_kliniken.html
                  </Text>
                </TouchableOpacity>
                <Text style={localStyle.p}>
                  Resilienz-Ambulanz des Leibniz-Institutes für
                  Resilienzforschung (LIR):
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL("https://lir-mainz.de/ambulanz")
                  }
                >
                  <Text style={localStyle.link}>
                    https://lir-mainz.de/ambulanz
                  </Text>
                </TouchableOpacity>
                <Text style={localStyle.p}>
                  Angebote des LIR zu Workshops und Vorträgen zur betrieblichen
                  Gesundheitsförderung:
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL("https://lir-mainz.de/oe-hr-beratung")
                  }
                >
                  <Text style={localStyle.link}>
                    https://lir-mainz.de/oe-hr-beratung
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
                <View style={localStyle.divider} />
                <Text style={[localStyle.p, localStyle.footnote]}>
                  [1] nach dem Kurzfragebogen Generalized Anxiety Disorder 2
                  (GAD-2), Kroenke K, Spitzer RL, Williams JB, Löwe B. An
                  ultra-brief screening scale for anxiety and depression: the
                  PHQ-4. Psychosomatics. 2009 Nov-Dec;50(6):613-21;
                  Vergleichswerte aus Beutel ME., Hettich N, Ernst M et al.
                  Mental health and loneliness in the German general population
                  during the COVID-19 pandemic compared to a representative
                  pre-pandemic assessment. Sci Rep. 2021 Jul; 11, 14946;
                </Text>
                <Text style={[localStyle.p, localStyle.footnote]}>
                  [2] nach dem Kurzfragebogen Patient Health Questionnaire 2
                  (PHQ-2), Kroenke K, Spitzer RL, Williams JB, Löwe B. An
                  ultra-brief screening scale for anxiety and depression: the
                  PHQ-4. Psychosomatics. 2009 Nov-Dec;50(6):613-21;
                  Vergleichswerte aus Beutel ME., Hettich N, Ernst M et al.
                  Mental health and loneliness in the German general population
                  during the COVID-19 pandemic compared to a representative
                  pre-pandemic assessment. Sci Rep. 2021 Jul; 11, 14946
                </Text>
                <Text style={[localStyle.p, localStyle.footnote]}>
                  [3] nach dem Kurzfragebogen Perceived Stress Scale 4 (PSS-4),
                  Cohen S, Kamarck T, & Mermelstein R (1983). A global measure
                  of perceived stress. Journal of Health and Social Behavior,
                  24, 385-396. Vergleichswerte aus dem Datensatz einer für die
                  Allgemeinbevölkerung in Deutschland repräsentative Studie:
                  Klein EM, Brähler E, Dreier M, Reinecke L, Müller KW,
                  Schmutzer G, Wölfling K, Beutel ME. The German version of the
                  Perceived Stress Scale - psychometric characteristics in a
                  representative German community sample. BMC Psychiatry. 2016
                  May 23;16:159. doi: 10.1186/s12888-016-0875-9
                </Text>
                <Text style={[localStyle.p, localStyle.footnote]}>
                  [4] nach dem Kurzfragebogen Copenhagen Burnout Inventory 6
                  (CBI-6), Kristensen, T. S., Borritz, M., Villadsen, E., &
                  Christensen, K. B. (2005). The Copenhagen Burnout Inventory: A
                  new tool for the assessment of burnout. Work & Stress, 19(3),
                  192-207. Vergleichswerte aus einer repräsentative Studie in
                  Deutschland Rep (2009, in prep)
                </Text>
              </View>
            }
          />
        </View>
        <TouchableOpacity
          accessibilityLabel="Fragebogen abschicken"
          accessibilityRole={config.text.accessibility.types.button}
          accessibilityHint="Fragebogen abschicken"
          onPress={exportAndUploadQuestionnaireResponse}
          style={{
            ...localStyle.button,
            ...localStyle.buttonComplete,
          }}
        >
          <Text style={localStyle.buttonLabel}>Fragebogen abschicken</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const localStyle = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    backgroundColor: config.theme.values.defaultBackgroundColor,
  },

  flexi: {
    flex: 1,
  },

  button: {
    ...config.theme.classes.buttonPrimary,
    bottom: 0,
    marginTop: 10,
    width: "80%",
    textAlign: "center",
  },

  buttonComplete: {
    backgroundColor:
      config.theme.values.defaultSendQuestionnaireButtonBackgroundColor,
    marginBottom: 30,
  },

  buttonLabel: {
    ...config.theme.classes.buttonLabel,
  },

  body: {
    margin: 20,
  },

  p: {
    marginVertical: 10,
  },

  title: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },

  sliderTextMax: {
    width: "33%",
    textAlign: "right",
    fontSize: 12,
  },

  sliderTextMin: {
    width: "33%",
    textAlign: "left",
    fontSize: 12,
  },

  sliderLabel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  thumb: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0%",
    left: "0%",
    zIndex: 10,
    backgroundColor: "#B3FFCD91",
  },

  thumbContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: config.theme.colors.primary,
    borderWidth: 3,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  thumbLabel: {
    textAlignVertical: "center",
    fontSize: 18,
  },

  link: {
    textDecorationLine: "underline",
    color: "blue",
  },
  divider: {
    height: 1,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "black",
    borderRadius: 0.5,
    marginVertical: 10,
  },
  footnote: {
    fontSize: 8,
  },
});

export default SummaryScreen;
