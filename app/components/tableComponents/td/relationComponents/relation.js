import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'material-ui/Dialog';

//components
import SelectRelation from '../relationComponents/selectRelation.js'
import ViewRelation from '../relationComponents/viewRelation.js'

class Relation extends React.Component {
	constructor(){
		super()
		this.state = {
			isOpenView:false,
			isOpenSelect:false
		}
	}
	componentDidMount(){
		
	}
	updateElement(relationObject){
		this.props.updateElementData(relationObject,this.props.columnData.name)
	}
	updateObject(){
		//dummy --- to make select relation re-usable
	}
	openCloseModal(what,which){
		this.state[which] = what
		this.setState(this.state)
	}
	handleClose(){

	}
	render() {
		return (
            <div className="listrelationdiv">
            	<span className="textnamerlation"> { this.props.columnData.name } </span>
            	<span className="relationtextrlation">{ this.props.elementData ? this.props.elementData.id : 'unassigned' }</span>
            	<button className="fr relationchangerelaion" onClick={this.openCloseModal.bind(this,true,'isOpenSelect')}>Change</button>
            	<button className="fr relationchangerelaion" onClick={this.openCloseModal.bind(this,true,'isOpenView')}>View</button>
            	{	
	            	this.state.isOpenView ? <ViewRelation 
												elementData={ this.props.elementData }
												table={ this.props.columnData.relatedTo }
												open={ this.state.isOpenView }
												openCloseModal={ this.openCloseModal.bind(this) }
												overlay={ true }
							            	/> : ''
            	}
            	{
            		this.state.isOpenSelect ? <SelectRelation 
												table={ this.props.columnData.relatedTo }
												updateObject={ this.updateObject.bind(this) }
												updateElement={ this.updateElement.bind(this) }
												open={ this.state.isOpenSelect }
												openCloseModal={ this.openCloseModal.bind(this) }
							            	/> : ''
            	}
            </div>
		);
	}
}

export default Relation;