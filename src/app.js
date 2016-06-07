var React = require('react');

var ReactDOM = require('react-dom');
var JSONSchemaForm = require('react-jsonschema-form');
var schema = require('./js/schema.js');
var uiSchema = require('./js/uiSchema.js');

var dummyData = require('./js/dummy.js');

// Covering browsers without Object.assign support (IE 9-11)
require('./js/polyfill.js');

var generateJson = function generateJson(data) {
    ReactDOM.render(React.createElement('textarea', {
            className: "form-control",
            rows: 20,
            value: JSON.stringify(data.formData, null, '\t'),
            readOnly: true
        }, null)
        , document.getElementById("out"));
};

var emptyOutput = function emptyOutput() {
    ReactDOM.render(React.createElement('br', {}, null)
        , document.getElementById("out"));
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

var loadMyData = function loadMyData() {
    var data = JSON.parse(document.getElementById("json-input").value);
    ReactDOM.render(
        React.createElement(JSONSchemaForm.default, {
            schema: schema,
            uiSchema: uiSchema,
            formData: data,
            liveValidate: true,
            onChange: emptyOutput,
            onSubmit: generateJson,
            onError: emptyOutput
        }), document.getElementById("app"));
    ReactDOM.render(
        React.createElement('div')
        ,document.getElementById("input")
    );
};

var submitMyData = function submitMyData() {
    ReactDOM.render(
        React.createElement("div",
            {className: "form-group field field-object"},
            React.createElement("h4",
                {}, "Please enter your json:"
            ),
            React.createElement("textarea",
                {
                    className: "form-control",
                    id: "json-input"
                }
            ),
            React.createElement("div",
                {className: "text-center"},
                React.createElement("button",
                    {
                        onClick: loadMyData,
                        className: "btn btn-primary"
                    },
                    "Load data"
                ))
        )
        , document.getElementById("input"));
};

(0, ReactDOM.render)(
    React.createElement("div", {
            className: "row"
        },
        React.createElement("button", {
            className: "btn btn-danger pull-right",
            onClick: loadDummyData
        }, "Load dummy data (test)"),
        React.createElement("button", {
            className: "btn btn-primary pull-left",
            onClick: submitMyData
        }, "Load my own data")
    ), document.getElementById("controls"));

(0, ReactDOM.render)(
    React.createElement(JSONSchemaForm.default, {
        schema: schema,
        uiSchema: uiSchema,
        liveValidate: true,
        onChange: emptyOutput,
        onSubmit: generateJson,
        onError: emptyOutput
    }), document.getElementById("app"));


// const Form = JSONSchemaForm.default;
//
// var App = React.createClass({
//     constructor(props) {
//         super(props);
//         // initialize state with Simple data sample
//         const {schema, uiSchema, formData, validate} = samples.Simple;
//         this.state = {
//             form: false,
//             schema,
//             uiSchema,
//             formData,
//             validate,
//             editor: "default",
//             theme: "default",
//             liveValidate: true,
//         };
//     },
//     render() {
//         const {
//             schema,
//             uiSchema,
//             formData,
//             liveValidate,
//             validate,
//             theme,
//             editor
//         } = this.state;
//
//         return (
//             <div className="container-fluid">
//                 <div className="page-header">
//                     <h1>react-jsonschema-form</h1>
//                     <div className="row">
//                         <div className="col-sm-8">
//                             <Selector onSelected={this.load}/>
//                         </div>
//                         <div className="col-sm-2">
//                             <Form schema={liveValidateSchema}
//                                   formData={liveValidate}
//                                   onChange={this.setLiveValidate}>
//                                 <div/>
//                             </Form>
//                         </div>
//                         <div className="col-sm-2">
//                             <ThemeSelector theme={theme} select={this.onThemeSelected}/>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-7">
//                     <Editor title="JSONSchema" theme={editor} code={toJson(schema)}
//                             onChange={this.onSchemaEdited}/>
//                     <div className="row">
//                         <div className="col-sm-6">
//                             <Editor title="UISchema" theme={editor} code={toJson(uiSchema)}
//                                     onChange={this.onUISchemaEdited}/>
//                         </div>
//                         <div className="col-sm-6">
//                             <Editor title="formData" theme={editor} code={toJson(formData)}
//                                     onChange={this.onFormDataEdited}/>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm-5">
//                     {!this.state.form ? null :
//                         <Form
//                             liveValidate={liveValidate}
//                             schema={schema}
//                             uiSchema={uiSchema}
//                             formData={formData}
//                             onChange={this.onFormDataChange}
//                             fields={{geo: GeoPosition}}
//                             validate={validate}
//                             onError={log("errors")}/>}
//                 </div>
//             </div>
//         );
//     }
// });
//
// ReactDOM.render(
//     React.createElement(App, null),
//     document.getElementById('app')
// );