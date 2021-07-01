import { StyleSheet } from 'react-native'

export const CommonStyle = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  componentA: {
    marginTop : 10,
    color: 'red',
  },
  componentB: {
    marginTop : 10,
    color: 'green'
  },
  componentC: {
    marginTop : 10,
    color: 'blue'
  },
  TextInput : {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonStyle: {
    marginTop: 50,
    padding: 20,
    color: 'red',
    justifyContent: "center",
    textAlign: "center",
  },
  buttonExportStyle: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#841584',
    justifyContent: "center",
    textAlign: "center",
  },
  container: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
   },
   colorRed : {
     color: '#841584'
   },
   flexible: { flex: 1 },
});
