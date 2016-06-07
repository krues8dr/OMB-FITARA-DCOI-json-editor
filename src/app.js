// var React = require('react');
import React, { Component } from "react";

var ReactDOM = require('react-dom');
var JSONSchemaForm = require('react-jsonschema-form');
var schema = require('./js/schema.js');
var uiSchema = require('./js/uiSchema.js');

var dummyData = require('./js/dummy.js');

// Covering browsers without Object.assign support (IE 9-11)
require('./js/polyfill.js');

const JsonForm = JSONSchemaForm.default;

var generateJson = function generateJson(data) {
    ReactDOM.render(React.createElement('textarea', {
            className: "form-control",
            rows: 20,
            value: JSON.stringify(data.formData, null, '\t'),
            readOnly: true
        }, null)
        , document.getElementById("out"));
};

var emptyOutput = function emptyOutput(){
    ReactDOM.render(React.createElement('br', {}, null)
        , document.getElementById("out"));
};

var renderForm = function renderForm() {
    ReactDOM.render(
        React.createElement(JSONSchemaForm.default, {
            schema: schema,
            uiSchema: uiSchema,
            formData: dummyData,
            liveValidate: true,
            onChange: emptyOutput,
            onSubmit: generateJson,
            onError: emptyOutput
        }), document.getElementById("app"));
};

var loadDummyData = function loadDummyData() {
    ReactDOM.render(
        React.createElement(JSONSchemaForm.default, {
            schema: schema,
            uiSchema: uiSchema,
            formData: dummyData,
            liveValidate: true,
            onChange: emptyOutput,
            onSubmit: generateJson,
            onError: emptyOutput
        }), document.getElementById("app"));
};

(0, ReactDOM.render)(
    React.createElement("div", {
            className: "row"
        },
        React.createElement("button", {
            className: "btn btn-danger pull-right",
            onClick: loadDummyData
        }, "Load dummy data (test)")), document.getElementById("controls"));

(0, ReactDOM.render)(
    React.createElement(JSONSchemaForm.default, {
        schema: schema,
        uiSchema: uiSchema,
        liveValidate: true,
        onChange: emptyOutput,
        onSubmit: generateJson,
        onError: emptyOutput
    }), document.getElementById("app"));

// class App extends Component {
//     constructor(props) {
//         super(props);
//         // initialize state with Simple data sample
//         const {schema, uiSchema, formData} = samples.Simple;
//         this.state = {
//             form: false,
//             schema,
//             uiSchema,
//             formData,
//             editor: "default",
//             theme: "default",
//         };
//     }
//
//     componentDidMount() {
//         this.load(samples.Simple);
//     }
//
//     shouldComponentUpdate(nextProps, nextState) {
//         return shouldRender(this, nextProps, nextState);
//     }
//
//     load = (data) => {
//         // force resetting form component instance
//         this.setState({form: false},
//             _ => this.setState({...data, form: true}));
//     };
//
//     onSchemaEdited   = (schema) => this.setState({schema});
//
//     onUISchemaEdited = (uiSchema) => this.setState({uiSchema});
//
//     onFormDataEdited = (formData) => this.setState({formData});
//
//     onThemeSelected  = (theme, {stylesheet, editor}) => {
//         // Side effect!
//         this.setState({theme, editor: editor ? editor : "default"}, _ => {
//             document.getElementById("theme").setAttribute("href", stylesheet);
//         });
//     };
//
//     onFormDataChange = ({formData}) => this.setState({formData});
//
//     render() {
//         const {schema, uiSchema, formData, theme} = this.state;
//         return (
//             <div className="container-fluid">
//                 <div className="page-header">
//                     <h1>react-jsonschema-form</h1>
//                     <div className="row">
//                         <div className="col-sm-10">
//                             <Selector onSelected={this.load} />
//                         </div>
//                         <div className="col-sm-2">
//                             <ThemeSelector theme={theme} select={this.onThemeSelected} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-7">
//                     <Editor title="JSONSchema"
//                             theme={this.state.editor}
//                             code={toJson(this.state.schema)}
//                             onChange={this.onSchemaEdited}
//                             forceRender={true} />
//                     <div className="row">
//                         <div className="col-sm-6">
//                             <Editor title="UISchema"
//                                     theme={this.state.editor}
//                                     code={toJson(this.state.uiSchema)}
//                                     onChange={this.onUISchemaEdited} />
//                         </div>
//                         <div className="col-sm-6">
//                             <Editor title="formData"
//                                     theme={this.state.editor}
//                                     code={toJson(this.state.formData)}
//                                     onChange={this.onFormDataEdited} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-5">
//                     {!this.state.form ? null :
//                         <Form
//                             liveValidate
//                             schema={schema}
//                             uiSchema={uiSchema}
//                             formData={formData}
//                             onChange={this.onFormDataChange}
//                             fields={{geo: GeoPosition}}
//                             onError={log("errors")} />}
//                 </div>
//             </div>
//         );
//     }
// }
//
// render(<App />, document.getElementById("app"));