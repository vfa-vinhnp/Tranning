/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  h1,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
        <ComponetA/>
        <ComponetC/>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

class ComponetA extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      name:  'ComponetA'
    }
 }

componentWillReceiveProps(){
  console.log( this.name +' : componentWillReceiveProps')
}

componentDidMount(){
  console.log( this.name +' : componentDidMount')
}

componentDidUpdate(){
  console.log( this.name +' : componentDidUpdate')
}

 callbackFunction = (childData) => {
  this.setState({ input: childData })
}

 render () {
   const { input } = this.state

   return (
      <View>
        <Text>
          This ComponetA || values pass form ComponentB : {input}
        </Text>
        
         <ComponetB message={"values pass from ComponentA"}  parentCallback={this.callbackFunction}  />
       </View>
     )
   }
 }

 class ComponetB extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
 }

handleChangeInputB = (text) => {
   this.setState({ input: text })
   this.props.parentCallback(text);
 }

 render () {
   const { input } = this.state

   return (
      <View>
        <Text>
          This ComponetB {this.props.message}
        </Text>
         <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={this.handleChangeInputB}
           value={input}
         />
       </View>
     )
   }
 }

 class ComponetC extends React.Component {
  constructor (props) {
    super(props)
    
 }

 render () {
   return (
      <View>
        <Text>
          This ComponetC
        </Text>
       </View>
     )
   }
 }

const styles = StyleSheet.create({
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
});

export default App;
