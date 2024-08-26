let h1_lucky = `
    <div id="wrap" class="bg-wheels">
    <h1 id="title"></h1>
    </div>  
`
$('.container-fluid:first-child').append(h1_lucky)

var padding = {top:20, right:40, bottom:0, left:0},
w = 530 - padding.left - padding.right,
h = 530 - padding.top  - padding.bottom,
r = Math.min(w, h)/2,
rotation = 0,
oldrotation = 0,
picked = 100000,
oldpick = [],
rot = [],
color = d3.scale.category20();//category20c()
var deg


var svg = d3.select('#chart')
.append("svg")
.data([data])
.attr("width",  w + padding.left + padding.right)
.attr("height", h + padding.top + padding.bottom);
var container = svg.append("g")
.attr("class", "chartholder")
.attr("transform", "translate(280 , 250 )");
var vis = container
.append("g");
var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);
// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice")
.data(pie)
.enter()
.append("g")
.attr("class", "slice");

arcs.append("path")
.attr("fill", function(d, i){ return data[i].color; })
.attr("d", function (d) { return arc(d); });
// add the text
arcs.append("text").attr("transform", function(d){
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle)/2;
    rot.push((d.angle * 180 / Math.PI - 90))
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
})
.attr("x", "-8%")
.text( function(d, i) {
    return data[i].label;
});

container.on("click", spin);

async function spin(d){

    await $.ajax({
        type: "GET",
        url: '/customer/gift/wheels/submit/',
        data : {'user_name':user_name},
        success: function (data_back) {
            if (data_back.type=='success'){

                if(data_back.value != 0){
                    var index;
                
                    data.some(function (entry, i) {
                        if (entry.value == data_back.value) {
                            index = i;
                            return true;
                        }
                    });
                    vectory = index + 1

                }else{
                    vectory = 0
                }

             }else if (data_back.type=='danger'){
                $('.bg-wheels').css({"display" : "flex"})
                $('.wrap').hide()
                $("#wrap h1").text(data_back.msg);
                $("html, body").animate({ scrollTop: 0 }, "slow");
                setTimeout(function(){
                    redirect()
                } , 2500)
            }
            else if (data_back.type=='redirect'){
                redirect()
            }
            
        }
    });
    
    if(vectory != 0){
        deg = ((-rot[vectory -1]))
    }else{
        deg = ((-rot[1]))
    }

    container.on("click", null);
    //all slices have been seen, all done
    if(oldpick.length == data.length){
        container.on("click", null);
        return;
    }
d3.select($('#lucky').removeAttr("id"))

var  ps = 360/data.length,
pieslice = Math.round(1440/data.length),
rng = Math.floor((Math.random() * 1440) + 360);

rotation = (Math.round(rng / ps) * ps);

picked = vectory - 1;
picked = picked >= data.length ? (picked % data.length) : picked;

$('.chartholder > g').css({"animation" : "rotation_chart 10s ease"})

setTimeout(function(){
    if(vectory == 0){
        vis.transition(11000)
    .duration(2000)
    .attr("transform", "rotate(" + deg + ")")
    .each("end", function(){
        //mark question as seen
        d3.select(".slice:nth-child(" + (picked + 1) + ") path")
        //populate question
        $('.bg-wheels').css({"display" : "flex"})
        $('.wrap').hide()
        $("#wrap h1").text('« متاسفانه شما برنده نشدید »');
        $("html, body").animate({ scrollTop: 0 }, "slow");
setTimeout(function(){
    redirect()
} , 3000)
    /* Comment the below line for restrict spin to sngle time */
    container.on("click", spin);
});

    }else{
        vis.transition(4000)
    .duration(6500)
    .attr("transform", "rotate(" + deg + ")")
    .each("end", function(){
        //mark question as seen
        d3.select(".slice:nth-child(" + (picked + 1) + ") path")
        //populate question
        $('.bg-wheels').css({"display" : "flex"})
        $('.wrap').show()
        $("#wrap h1").text(data[picked].question);
        $("html, body").animate({ scrollTop: 0 }, "slow");
setTimeout(function(){
    redirect()
} , 3000)
    /* Comment the below line for restrict spin to sngle time */
    container.on("click", spin);
});

    }
    
} , 9500)
}
//make arrow

//draw spin circle
svg.append("g")
.attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
.append("path")
.attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
.style({"fill":"black"});
// draw spin circle
container.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 60)
.style({"fill":"white","cursor":"pointer" , "filter": "drop-shadow(1px 2px 6px rgba(0,0,0,.8))"});
$('#chart').append(`<img id="logo_chart" src="/static/customer/theme-01/img/button-01.png" />`)
$('#logo_chart').click(spin)






