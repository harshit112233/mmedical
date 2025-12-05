// Generic donut chart loader
function loadDonutChart(id, value, color) {
    new Chart(document.getElementById(id), {
        type: "doughnut",
        data: {
            datasets: [{
                data: [value, 100 - value],
                backgroundColor: [color, "#E5E7EB"],
                borderWidth: 0
            }]
        },
        options: {
            cutout: "70%",
            plugins: { legend: { display: false } }
        }
    });
}

// SUMMARY CHARTS (sample data)
loadDonutChart("presentChart", 20, "#10B981");
loadDonutChart("absentChart", 20, "#EF4444");
loadDonutChart("onTimeChart", 25, "#3B82F6");
loadDonutChart("lateChart", 35, "#F59E0B");

// LOCATION CHARTS (sample)
["loc1","loc2","loc3","loc4","loc5","loc6"].forEach(id => {
    loadDonutChart(id, Math.floor(Math.random() * 100), "#3B82F6");
});

// SAMPLE TABLE DATA
document.getElementById("mostLateTable").innerHTML = `
<tr><td>Neha</td><td>18</td></tr>
<tr><td>Deepak</td><td>15</td></tr>
<tr><td>Akshata</td><td>12</td></tr>
`;

document.getElementById("leastLateTable").innerHTML = `
<tr><td>Shivani</td><td>2</td></tr>
<tr><td>Anita</td><td>3</td></tr>
<tr><td>Rajesh</td><td>4</td></tr>
`;
