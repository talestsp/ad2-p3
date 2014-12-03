function desenharWCloud(words) {
         var fill = d3.scale.category20();

          d3.layout.cloud().size([400, 300])
          .words(words.map(function(d) {
            return {text: d, size: 10 + Math.random() * 50};
          }))
          .padding(5)
          .rotate(function() { return ~~(Math.random() * 2) * 90; })
          .font("Impact")
          .fontSize(function(d) { return d.size; })
          .on("end", draw)
          .start();


//limpar a div #wcloud
        function draw(words) {
        d3.selectAll("#pasted").remove();

        d3.select("#show").append("svg")
            .attr("id", "pasted")
            .attr("width", 400)
            .attr("height", 400)
          .append("g")
            .attr("transform", "translate(200,150)")
          .selectAll("text")
            .data(words)
          .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
  }
  }

