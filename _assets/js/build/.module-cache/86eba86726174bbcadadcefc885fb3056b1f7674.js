React.render(
React.createElement("h1", null, "Hello, worlddd!"),
    document.getElementById('example')
);
var radioElement = React.createClass({displayName: "radioElement",
    render: function(){
        return (
            React.createElement("div", {class: "radio-element"}
            )
        )
    }
});
var typeBlock = React.createClass({displayName: "typeBlock",
    render: function() {
        var typesData = data['sheet'];
        var elements = typesData.map(function(type){
            return
        })
    }
});