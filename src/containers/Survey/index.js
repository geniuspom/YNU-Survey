import React, { Component } from 'react';
import {connect} from "react-redux";
import $ from 'jquery';

//CSS

import SurveyPage from '../../components/Survey';

//import { SubmitIssue } from '../../actions/issue';

class Survey extends Component {

//////////////////////////////////////////////////

  constructor(props) {
    super(props)
    this.state = {
      category: 'Admin Function',
      severity_level: 'Feature Request',
    }
    //this.onUnload = this.onUnload.bind(this) // if you need to bind callback to this
    //this.createNew = this.createNew.bind(this)
    //this.submitcreat = this.submitcreat.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.goHome = this.goHome.bind(this)
  }

  handleSubmit(e){

    e.preventDefault();

    const reloaddata = document.getElementById('reloaddata')
    reloaddata.classList.remove('fadeOut')

    const myForm = document.getElementById('IssueForm')
    const formData = new FormData(myForm)

    this.props.onSubmitForm(formData)

  }

  validate(){

    //document.getElementsByName('subject')


  }

  goHome(){
    location.href = "/"
  }

  onInputChange(e){

    e.preventDefault();

    const element = document.getElementById('file_name')

    const file = document.getElementById('file').files[0].name

    element.value = file

  }

  removeReloaddata(){

    const reloaddata = document.getElementById('reloaddata')

    setTimeout(() => {
      reloaddata.classList.add('fadeOut');
    }, 1000);

  }

  componentWillUnmount() {
      window.removeEventListener("beforeunload", this.onUnload)
  }

/////////////////////////////////////////////////

  componentDidMount() {
      //this.props.onloadclient()
      window.addEventListener("beforeunload", this.onUnload)
      //$('#dataTable').DataTable()
  }

  componentDidUpdate(){

    const actionstatus = this.props.issue.status

    if(actionstatus != 'new'){
      this.removeReloaddata()
    }

    if(actionstatus === 'success'){

      setTimeout(() => {
        //$('#Modal').modal('toggle')
        $('#Modal').modal({backdrop: 'static', keyboard: false})
      }, 1000);

    }else if(actionstatus === 'error'){


    }else{

    }

  }

  render() {

    return (
      <SurveyPage data="test data"/>
        //clients={this.props.client}
        //putfunction={this.loadclient}
        //createNew={this.createNew}
      //>
    )
  }
}

const mapStatetoProps = (state)=> ({
    client:state.client,
    issue:state.issue
})

const mapDispatchtoProps = (dispatch)=> ({

  onSubmitForm(formData){
    dispatch(SubmitIssue(formData))
  }

})

const SurveyWithConnect = connect(mapStatetoProps,mapDispatchtoProps)(Survey)
export default SurveyWithConnect
