
var RadioElement = React.createClass({displayName: "RadioElement",
    radioChecked: function(type, element) {
        if (!element.checked) {
            console.log(type);
        }
    },
    render: function(){
        return (
            React.createElement("div", {className: "radio-element"}, 
                React.createElement("input", {type: "radio", id: this.props.id, "data-type": this.props.type, name: this.props.name, onChange: this.radioChecked.bind(null, this.props.type)}), 
                React.createElement("label", {htmlFor: this.props.id}, this.props.fullName)
            )
        )
    }
});
var TypeBlock = React.createClass({displayName: "TypeBlock",
    render: function() {
        var typesData = Object.keys(data['sheet']);
        var elements = typesData.map(function(type, index){
            return React.createElement(RadioElement, {type: type, fullName: type['name'], name: 'type-block', id: 'type-block' + index})
        });
        return (
            React.createElement("div", {className: "photo-gallery"}, 
                elements
            )
        )
    }
});
React.render(React.createElement(TypeBlock, null), document.getElementsByClassName('type-block')[0]);