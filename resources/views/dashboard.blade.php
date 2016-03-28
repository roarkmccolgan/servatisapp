<!DOCTYPE html>
<html class="no-js" lang="en">
	<head>
		<meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
	  <title>MTN Group</title>
	  
	  <meta name="description" content="">

	  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	  <link rel="stylesheet" href="/css/app.css">
	  
	  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	</head>
	<body>
		
		<nav id="menu">
			<header>
				<img src="img/avatar.jpg" alt="avatar" width="105" height="105">
				<aside>
					<h2><em>MTN GROUP</em> Ahmed Ghandour</h2>
					<a href="#"><i class="fa fa-user"></i>profile</a>
					<a href="/"><i class="fa fa-unlock-alt"></i>logout</a>
				</aside>
			</header>
			<ul>
				<li><a href="#" class="active"><i class="fa fa-th-list"></i> Overview</a></li>
				<li><a href="/alerts"><i class="fa fa-exclamation-circle"></i> Notifications</a></li>
				<li><a href="/alerts"><i class="fa fa-clock-o"></i> History</a></li>
				<li><a href="/alerts"><i class="fa fa-battery-full"></i> Battery Status</a></li>
				<li><a href="/alerts"><i class="fa fa-bolt"></i> Grid Overview</a></li>
				<li><a href="/alerts"><i class="fa fa-server"></i> Modules</a></li>
				<li><a href="/alerts"><i class="fa fa-bar-chart"></i> Reports</a></li>
			</ul>
		</nav>
		<div class="container">
			<a href="#menu" id="menu-opener"><span>Menu</span></a>
			<header id="header">
				<div class="wrapper clearfix">
					<img src="img/servatis.jpg" alt="servatis" width="107" height="26">
					<aside>
						<h1>POWER STATION SV-27816 <i class="fa fa-chevron-down"></i></h1>
						<address><i class="fa fa-map-marker"></i> Rundu, Kavango East, <strong>NAMIBIA</strong></address>
						<time datetime="2016-02-02">2nd February 2016 - 08:45</time>
					</aside>
				</div>
			</header>
			<div id="gauges">
				<div class="wrapper clearfix">
					<article>
						<h3>Solar</h3>
						<div class="led-box">
							<div class="led-green"></div>
						</div>
						<figure id="solarvoltage_gauge">
							<!-- <img src="img/voltage.png" alt="voltage" width="312" height="375"> -->
						</figure>
						<div class="mini-gauge" id="solaramperage_gauge">
							
						</div>
						<div class="mini-gauge" id="solartemp_gauge">
							
						</div>
					</article>
					<article>
						<h3>Generator</h3>
						<div class="led-box">
							<div class="led-grey"></div>
						</div>
						<figure id="generatorvoltage_gauge">
							<!-- <img src="img/amps.png" alt="amps" width="312" height="375"> -->
						</figure>
						<div class="mini-gauge" id="generatoramperage_gauge">
							
						</div>
						<div class="mini-gauge" id="generatortemp_gauge">
							
						</div>
					</article>
					<article>
						<h3>Grid</h3>
						<div class="led-box">
							<div class="led-red"></div>
						</div>
						<figure id="gridvoltage_gauge">
							<!-- <img src="img/amps.png" alt="amps" width="312" height="375"> -->
						</figure>
						<div class="mini-gauge" id="gridamperage_gauge">
							
						</div>
						<div class="mini-gauge" id="gridtemp_gauge">
							
						</div>
					</article>
					
					<div class="alerts">
						<h3>Alerts</h3>
						<div>
							<a href="/alerts"><time datetime="08:30">08:30</time><span>Grid Power Restore</span></a>
							<a href="/alerts"><time datetime="05:15">05:15</time><span>Grid power loss</span></a>
							<a class="sep"><time datetime="2016-02-01">Feb 01</time><span>&nbsp;</span></a>
							<a href="/alerts"><time datetime="08:18">08:18</time><span>Main Door Closed</span></a>
							<a href="/alerts"><time datetime="01:30">01:30</time><span>Main Door Open</span></a>
							<a href="/alerts"><time datetime="08:30">08:30</time><span>Main Door Open</span></a>
							<a href="/alerts"><time datetime="08:30">08:30</time><span>Main Door Open</span></a>
							<a href="/alerts"><time datetime="08:30">08:30</time><span>Batteries Low</span></a>
						</div>
					</div>
				</div>
			</div>
			<main id="grid">
				<div class="wrapper clearfix">
					<div class="boxes clearfix">
						<h3><i class="fa fa-heartbeat"></i> VITALS</h3>
						
						<div class="box">
							<h4>Inverter Heat Sink</h4>
							<div class="box-content clearfix">
								<div class="left">
									<h5>Temperature</h5>
									<div class="degree">
										<strong>60º</strong>C
									</div>
								</div>
								<div class="right">
									<h5>Alerts</h5>
									<p>0</p>
								</div>
							</div>
						</div>
						
						<div class="box">
							<h4>Ambient Temp</h4>
							<div class="box-content clearfix">
								<div class="left">
									<h5>Temperature</h5>
									<div class="degree">
										<strong>23º</strong>C
									</div>
								</div>
								<div class="right">
									<h5>MON HIGH</h5>
									<p>35˚</p>
								</div>
							</div>
						</div>
						
						<h3><i class="fa fa-signal"></i> STATISTICS</h3>
						
						<div class="box">
							<h4>Grid Usage</h4>
							<div class="box-content clearfix">
								<div class="left single">
									<h5>Monthly AVERAGE</h5>
									<div class="kwh">
										<strong>18</strong> kWh/day
									</div>
								</div>
							</div>
						</div>
						
						<div class="box">
							<h4>Carbon Savings <em>C0<sub>2</sub></em></h4>
							<div class="box-content clearfix">
								<div class="left">
									<h5>CURRENT MONTH</h5>
									<div class="kg">
										<strong>13</strong> KG<small>/month</small>
									</div>
								</div>
								<div class="right">
									<h5>YEAR BEST</h5>
									<p>50</p>
								</div>
							</div>
						</div>
						
					</div>
					<aside class="grid">
						<h3><i class="fa fa-line-chart"></i> USAGE HISTORY</h3>
						<figure id="linechart_material" style="min-height: 270px">
							<!-- <img src="img/graphic.png" alt="graphic" width="780" height="424"> -->
						</figure>
					</aside>
				</div>
			</main>
		</div>

		<script src="/js/vendor/jquery.min.js"></script>
    <script src="/js/plugins.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    <script src="/js/app.js"></script>
	</body>
</html>
