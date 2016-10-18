import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//components
import Table from './components/table.js';

//stores
import TableStore from './stores/tableStore.js';

class Layout extends React.Component {
	componentWillMount() {
		//CB.CloudApp.init('http://localhost:4730','jjwiumppcgur','4d4927ec-da6a-49fb-bafb-7efa3c8a163f')
		CB.CloudApp.init('imohipzlslmh','bc22b489-18c1-4d0b-9894-7fc06939e64b')
	}
	render() {
	  return (
	  	<MuiThemeProvider>
	  		<Table tableStore={ TableStore }></Table>
	  	</MuiThemeProvider>
	  );
	}
}

ReactDOM.render(<Layout/>, document.getElementById('main'));