import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
 
    // function generateRandomData() {
    //   return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));
    // }

    // // Initialize the chart
    // function initializeChart() {
    //   var ctx = document.getElementById('monthlyChart').getContext('2d');
    //   var chart = new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //       datasets: [{
    //         label: 'Statistics',
    //         data: generateRandomData(),
    //         backgroundColor: '#4F46E5',
    //         borderColor: '#4F46E5',
    //         borderWidth: 1
    //       }]
    //     },
    //     options: {
    //       responsive: true,
    //       scales: {
    //         y: {
    //           beginAtZero: true
    //         }
    //       }
    //     }
    //   });
    // }

    // // Initialize the chart when the document is ready
    // document.addEventListener("DOMContentLoaded", function(e) {
    //   initializeChart();
    // });
  return <>
    <div className="grid grid-cols-2 gap-8">
  {/* Statistics */}
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">Số Liệu Thống Kê</h3>
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0 mr-4" />
      <div>
        <h4 className="text-xl font-semibold">Người dùng</h4>
        <p className="text-gray-500">1,234</p>
      </div>
    </div>
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-green-500 rounded-full flex-shrink-0 mr-4" />
      <div>
        <h4 className="text-xl font-semibold">Doanh số</h4>
        <p className="text-gray-500">$5,678</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-yellow-500 rounded-full flex-shrink-0 mr-4" />
      <div>
        <h4 className="text-xl font-semibold">Đơn hàng</h4>
        <p className="text-gray-500">345</p>
      </div>
    </div>
  </div>
  {/* Charts */}
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">Biểu đồ</h3>
    <canvas id="monthlyChart" />
  </div>
</div>

  </>
  ;
};

export default Dashboard;
