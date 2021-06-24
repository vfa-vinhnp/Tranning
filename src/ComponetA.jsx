import React from 'react';

class ComponetA extends React.Component {

    constructor (props) {
       super(props)
       this.state = {
         input: ''
       }
    }
  
  handleChangeInput = (text) => {
      this.setState({ input: text })
    }
  
    render () {
      const { input } = this.state
  
      return (
         <View>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={this.handleChangeInput}
              value={input}
            />
          </View>
        )
      }
   }

export default ComponetA;
