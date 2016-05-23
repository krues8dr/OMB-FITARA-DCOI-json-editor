var React = require('react');
var ReactDOM = require('react-dom');
var JSONSchemaForm = require('react-jsonschema-form');

var schema = require('./schema.js');
var dummyData = require('./dummy.js');

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

var loadDummyData = function loadDummyData() {
    ReactDOM.render(
        React.createElement(JSONSchemaForm.default, {
            schema: schema,
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
            className: "btn btn-info pull-right",
            onClick: loadDummyData
        }, "Load dummy data (test)")), document.getElementById("controls"));

(0, ReactDOM.render)(
    React.createElement(JSONSchemaForm.default, {
        schema: schema,
        liveValidate: true,
        onChange: emptyOutput,
        onSubmit: generateJson,
        onError: emptyOutput
    }), document.getElementById("app"));