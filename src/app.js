var React = require('react');

var ReactDOM = require('react-dom');
var JSONSchemaForm = require('react-jsonschema-form');
var schema = require('./js/schema.js');
var uiSchema = require('./js/uiSchema.js');
var Clipboard = require('clipboard');

var dummyData = require('./js/dummy.js');

// Covering browsers without Object.assign support (IE 9-11)
require('./js/polyfill.js');

var generateJson = function generateJson(data) {
    ReactDOM.render(React.createElement('textarea', {
            className: "form-control",
            id: "jsonOut",
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
        }), document.getElementById("app"),
        React.createElement("button",{
            className: "btn hidden copyBtn",
            data-clipboard-action:
        }));
};

new Clipboard('.copyBtn');

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