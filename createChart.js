function createChart(results) {

	//UTIL
	var colors = ['#A8A10B', '#CE163B' , '#EF8601', '#5C0B2D', '#FACD00', '#FBB379', '#1C4458', '#FF6DEC','#E65FF5', '#F73DD5', '#7AB4B4', '#218870','#00A49F','#804D2F'];

	var formCol = results.splice(0,1);

	var excludeQ= ['Horodateur','Your name :', 'Your Email address:      '];
	var chartLayoutOption = ['pie', 'pie', 'bar', 'pie', 'horizontalBar',
	                            'pie', 'horizontalBar', 'pie', 'horizontalBar',
	                            'horizontalBar', 'pie','pie', 'pie','pie' ,
	                            'horizontalBar','pie','horizontalBar',
	                            'horizontalBar','horizontalBar','horizontalBar',
	                            'pie','pie','pie','pie'
	                        ];

	createChartsLayout(formCol[0],chartLayoutOption,excludeQ );

	function round10(number, precision) {
	    var factor = Math.pow(10, precision);
	    var tempNumber = number * factor;
	    var roundedTempNumber = Math.round(tempNumber);
	    return roundedTempNumber / factor;
	}
	var valuLength = results.length;

	Chart.defaults.global.plugins.datalabels.backgroundColor= '#FFFFFF';
	Chart.defaults.global.plugins.datalabels.padding.top =0;
	Chart.defaults.global.plugins.datalabels.padding.bottom =0;
	Chart.defaults.global.plugins.datalabels.padding.left =2;
	Chart.defaults.global.plugins.datalabels.padding.right =2;
	Chart.defaults.global.plugins.datalabels.anchor ='end';
	Chart.defaults.global.plugins.datalabels.align ='start';
	Chart.defaults.global.plugins.datalabels.formatter = function(value, context) {
	    var percent = round10(value/valuLength*100,1);
	    return '' + percent + '%';
	};


	// var colors = [];
	// for (var colorCount = 0; colorCount < 40 ; colorCount++) {
	//     colors.push("#" + Math.random().toString(16).slice(2, 8));
	// }


	var gender_male=0;
	var gender_not_say=0;
	var gender_female=0;
	var gender_other=0;
	////////////////////
	var age_20=0;
	var age_30=0;
	var age_40=0;
	var age_50=0;
	var age_60=0;
	////////////////////
	var uniqueNationality= [];
	////////////////////
	var answer1Yes=0;
	var answer1No=0;
	///////////////////////
	var q1_sapporo=0;
	var q1_iwate=0;
	var q1_tokyo=0;
	var q1_saitama=0;
	var q1_kanagawa=0;
	var q1_shizuoka=0;
	var q1_aichi=0; 
	var q1_kobe=0;
	var q1_osaka=0;
	var q1_fukuoka=0;
	var q1_kumamoto=0;
	var q1_oita=0;
	///////////////////////
	var Q2_yes = 0;
	var Q2_no = 0;
	/////////////////////
	var q2_sapporo=0;
	var q2_iwate=0;
	var q2_tokyo=0;
	var q2_saitama=0;
	var q2_kanagawa=0;
	var q2_shizuoka=0;
	var q2_aichi=0; 
	var q2_kobe=0;
	var q2_osaka=0;
	var q2_fukuoka=0;
	var q2_kumamoto=0;
	var q2_oita=0;
	/////////////////////
	var Q3_yes = 0;
	var Q3_no = 0;
	//////////////////
	var q3_Aomori_Prefecture=0;
	var q3_Iwate_Prefecture=0;
	var q3_Miyagi_Prefecture=0;
	var q3_Akita_Prefecture=0;
	var q3_Yamagata_Prefecture=0;
	var q3_Fukushima_Prefecture=0;
	/////////////////////
	var q4_unesco=0;
	var q4_cuisine=0;
	var q4_sake=0;
	var q4_nature=0;
	var q4_tourist_sites=0;
	var q4_festivals=0;
	var q4_trains=0;
	var q4_springs=0;
	var q4_shopping=0;
	var q4_sports=0;
	var q4_events=0;
	var q4_people=0;
	var q4_tsunami=0;
	var q4_culture=0;
	////////////////
	var q5_never=0;
	var q5_once=0;
	var q5_3times=0;
	var q5_5times=0;
	var q5_more6times=0;
	/////////////////
	var q6_1_day=0;
	var q6_3_days=0;
	var q6_6_days=0;
	var q6_1_week=0;
	var q6_2_weeks=0;
	var q6_more_2_weeks=0;
	////////////
	var q7_by_yourself=0;
	var q7_with_friends=0;
	var q7_with_family=0;
	var q7_as_a_couple=0;
	var q7_in_a_group=0;
	var q7_other=0;
	////////////////
	var q7bis_stay_in_one_place=0;
	var q7bis_stay_in_multiple_cities=0;
	///////////////
	var q8_official_tourism_websites=0;
	var q8_word_of_mouth=0;
	var q8_social_media=0;
	var q8_blogs=0;
	var q8_youtube=0;
	var q8_travel_agencies=0;
	var q8_travel_guidebooks=0;
	var q8_tv=0;
	var q8_magazines=0;
	var q8_friends=0;
	var q8_other=0;
	//////////////////
	var q9_travel_agent = 0;
	var q9_independently = 0;
	/////////////////////
	var q10_smartphone = 0;
	var q10_tablet = 0;
	var q10_PC = 0;
	var q10_guidebooks = 0;
	var q10_info_signs　= 0;
	var q10_info_centers = 0;
	//////////////////////
	var q11_free_Wi_Fi_spots=0;
	var q11_transport_information=0;
	var q11_accommodation_facilities=0;
	var q11_bars_and_restaurants=0;
	var q11_shopping_facilities=0;
	var q11_tourism_facilities=0;
	var q11_souvenir_shops=0;
	var q11_tourist_events=0;
	var q11_ATM_locations=0;
	var q11_currency_exchange_locations=0;
	var Q11_rugby_match_schedules_results=0;
	///////////////////

	var q12_lack_WiFi = 0;
	var q12_lack_english_signage = 0;
	var q12_transport_difficulties = 0;
	var q12_lack_card_payment = 0;
	var q12_lack_english_websites　= 0;
	//////////////////
	var q13_Train=0;
	var q13_Bus=0;
	var q13_Taxi=0;
	var q13_Rental_car=0;
	var q13_unsure=0;
	//////////////////
	var q14_yes = 0;
	var q14_no = 0;
	//////////////////
	var Q15_yes = 0;
	var Q15_no = 0;
	////////////////
	var uniqueComment=[];
	///////////////
	var q17_yes = 0;
	var q17_no = 0;

	console.log(results.length);


	for (var i = 0; i < results.length; i++) {
	    var curRow = results[i];
	    //gender
	    switch(curRow[1]) {
	        case 'Female':
	            gender_female++;
	            break;
	        case 'Male':
	            gender_male++;
	            break;
	        case 'Other':
	            gender_other++;
	            break;
	        default:
	            gender_not_say++;
	            break;
	    }

	    //age
	    if (curRow[2] === "20s" ) {
	        age_20++;
	    }else if(curRow[2] === "30s" ) {
	        age_30++;
	    }else if (curRow[2] === "40s") {
	        age_40++;
	    }else if (curRow[2] === "50s" ) {
	        age_50++;
	    }else{
	        age_60++;
	    }

	    //nationality
	    var nationality = curRow[3].toLowerCase();
	    nationality = nationality.trim();

	    if (uniqueNationality[nationality] === undefined) {
	     uniqueNationality[nationality]=0;
	     uniqueNationality[nationality]++;
	    }else {
	        uniqueNationality[nationality]++;
	    }

	    //Q1
	    if (curRow[4] === "Yes" ) {
	        answer1Yes++;
	    }else {
	        answer1No++;
	    }

	    //Q1bis
	    if(curRow[5].includes("Sapporo City")) {
	        q1_sapporo++;
	    }

	    if (curRow[5].includes("Iwate Prefecture, Kamaishi City")) {
	        q1_iwate++;
	    }

	    if ( curRow[5].includes("Tokyo Metropolitan") ) {
	        q1_tokyo++;
	    }

	    if (curRow[5].includes("Saitama Prefecture, Kumagaya City")) {
	        q1_saitama++;
	    }

	    if (curRow[5].includes("Kanagawa Prefecture, Yokohama City")) {
	        q1_kanagawa++;
	    }

	    if (curRow[5].includes("Shizuoka Prefecture")) {
	        q1_shizuoka++;
	    }

	    if (curRow[5].includes("Aichi Prefecture, Toyota City")) {
	        q1_aichi++;
	    }

	    if (curRow[5].includes("Kobe City")) {
	        q1_kobe++;
	    } 

	    if (curRow[5].includes("Osaka Prefecture, Higashi-Osaka City")) {
	        q1_osaka++;
	    } 

	    if (curRow[5].includes("Fukuoka Prefecture, Fukuoka City")) {
	        q1_fukuoka++;
	    } 

	    if (curRow[5].includes("Kumamoto Prefecture, Kumamoto City")) {
	        q1_kumamoto++;
	    } 

	    if (curRow[5].includes("Oita Prefecture")) {
	        q1_oita++;
	    }


	    //q2
	    if (curRow[6]==='Yes') {
	        Q2_yes++;
	    }else {
	        Q2_no++;
	    }

	    //q2 bis

	    q2_sapporo+=parseInt(curRow[7]);
	    q2_iwate+=parseInt(curRow[8]);
	    q2_tokyo+=parseInt(curRow[9]);
	    q2_saitama+=parseInt(curRow[10]);
	    q2_kanagawa+=parseInt(curRow[11]);
	    q2_shizuoka+=parseInt(curRow[12]);
	    q2_aichi+=parseInt(curRow[13]); 
	    q2_kobe+=parseInt(curRow[14]);
	    q2_osaka+=parseInt(curRow[15]);
	    q2_fukuoka+=parseInt(curRow[16]);
	    q2_kumamoto+=parseInt(curRow[17]);
	    q2_oita+=parseInt(curRow[18]);

	    //q3
	    if (curRow[19]==='Yes') {
	        Q3_yes++;
	    }else {
	        Q3_no++;
	    }

	    //q3 bis
	    q3_Aomori_Prefecture+=parseInt(curRow[20]);
	    q3_Iwate_Prefecture+=parseInt(curRow[21]);
	    q3_Miyagi_Prefecture+=parseInt(curRow[22]);
	    q3_Akita_Prefecture+=parseInt(curRow[23]);
	    q3_Yamagata_Prefecture+=parseInt(curRow[24]);
	    q3_Fukushima_Prefecture+=parseInt(curRow[25]);

	    //q4
	    if(curRow[26].includes("to visit UNESCO World Heritage Sites")) {
	        q4_unesco++;
	    }

	    if (curRow[26].includes("to enjoy traditional cuisine")) {
	        q4_cuisine++;
	    }

	    if (curRow[26].includes("to enjoy Japanese sake (alcohol)")) {
	        q4_sake++;
	    }

	    if (curRow[26].includes("to experience nature")) {
	        q4_nature++;
	    }

	    if (curRow[26].includes("to visit tourist sites")) {
	        q4_tourist_sites++;
	    }

	    if (curRow[26].includes("to see local festivals")) {
	        q4_festivals++;
	    }

	    if (curRow[26].includes("to ride local trains")) {
	        q4_trains++;
	    }

	    if (curRow[26].includes("to enjoy hot springs")) {
	        q4_springs++;
	    } 

	    if (curRow[26].includes("to go shopping")) {
	        q4_shopping++;
	    } 

	    if (curRow[26].includes("to watch sports")) {
	        q4_sports++;
	    } 

	    if (curRow[26].includes("to participate in hands-on experiences/events")) {
	        q4_events++;
	    } 

	    if (curRow[26].includes("to meet local people")) {
	        q4_people++;
	    }

	    if (curRow[26].includes("to learn about the earthquake/tsunami disaster")) {
	        q4_tsunami++;
	    }
	    
	    if (curRow[26].includes("to learn about local history and culture")) {
	        q4_culture++;
	    } 


	    /////q5
	    switch(curRow[27]){
	        case 'never':
	        q5_never++;
	        break;
	        case 'once':
	        q5_once++;
	        break;
	        case '2～3 times':
	        q5_3times++;
	        break;
	        case '4～5 times':
	        q5_5times++;
	        break;
	        case 'more than 6 times':
	        q5_more6times++;
	        break;
	    }

	    //Q6

	    switch(curRow[28]){
	        case '1 day':
	        q6_1_day++;
	        break;
	        case '2～3 days':
	        q6_3_days++;
	        break;
	        case '4～6 days':
	        q6_6_days++;
	        break;
	        case '1 week':
	        q6_1_week++;
	        break;
	        case '2 week':
	        q6_2_weeks++;
	        break;
	        case 'more than 2 weeks':
	        q6_more_2_weeks++;
	        break;
	    }

	    ////Q7
	    switch(curRow[29]){
	        case 'by yourself':
	        q7_by_yourself++;
	        break;
	        case 'with friends':
	        q7_with_friends++;
	        break;
	        case 'with family':
	        q7_with_family++;
	        break;
	        case 'as a couple':
	        q7_as_a_couple++;
	        break;
	        case 'in a group':
	        q7_in_a_group++;
	        break;
	        case 'other':
	        q7_other++;
	        break;
	    }

	    ///Q7bis
	    switch(curRow[30]){
	        case 'stay in one place':
	        q7bis_stay_in_one_place++;
	        break;
	        case 'stay in multiple cities':
	        q7bis_stay_in_multiple_cities++;
	        break;
	    }

	    //Q8
	    if(curRow[31].includes("official tourism websites")) {
	        q8_official_tourism_websites++;
	    }

	    if (curRow[31].includes("word-of-mouth")) {
	        q8_word_of_mouth++;
	    }

	    if (curRow[31].includes("social media")) {
	        q8_social_media++;
	    }

	    if (curRow[31].includes("blogs")) {
	        q8_blogs++;
	    }

	    if (curRow[31].includes("video-sharing websites（Youtube）")) {
	        q8_youtube++;
	    }

	    if (curRow[31].includes("travel agencies")) {
	        q8_travel_agencies++;
	    }

	    if (curRow[31].includes("travel guidebooks")) {
	        q8_travel_guidebooks++;
	    }

	    if (curRow[31].includes("T.V")) {
	        q8_tv++;
	    } 

	    if (curRow[31].includes("magazines")) {
	        q8_magazines++;
	    } 

	    if (curRow[31].includes("friends")) {
	        q8_friends++;
	    } 

	    if (curRow[31].includes("other")) {
	        q8_other++;
	    }

	    //Q9///

	    if (curRow[32] === "through a travel agent") {
	        q9_travel_agent++;
	    }else {
	        q9_independently++;
	    }

	    //Q10//

	    if(curRow[33].includes("smartphone")) {
	        q10_smartphone++;
	    }

	    if (curRow[33].includes("tablet")) {
	        q10_tablet++;
	    }

	    if (curRow[33].includes("PC")) {
	        q10_PC++;
	    }

	    if (curRow[33].includes("tourist guidebooks")) {
	        q10_guidebooks++;
	    }

	    if (curRow[33].includes("tourist information signs")) {
	        q10_info_signs++;
	    }

	    if (curRow[33].includes("tourist information centers")) {
	        q10_info_centers++;
	    }

	    //////Q11
	    if(curRow[34].includes("free Wi-Fi spots")) {
	        q11_free_Wi_Fi_spots++;
	    }

	    if (curRow[34].includes("transport information")) {
	        q11_transport_information++;
	    }

	    if (curRow[34].includes("accommodation facilities")) {
	        q11_accommodation_facilities++;
	    }

	    if (curRow[34].includes("bars and restaurants")) {
	        q11_bars_and_restaurants++;
	    }

	    if (curRow[34].includes("shopping facilities")) {
	        q11_shopping_facilities++;
	    }

	    if (curRow[34].includes("tourism facilities")) {
	        q11_tourism_facilities++;
	    }

	    if (curRow[34].includes("souvenir shops")) {
	        q11_souvenir_shops++;
	    }

	    if (curRow[34].includes("tourist events")) {
	        q11_tourist_events++;
	    } 

	    if (curRow[34].includes("ATM locations")) {
	        q11_ATM_locations++;
	    } 

	    if (curRow[34].includes("currency exchange locations")) {
	        q11_currency_exchange_locations++;
	    } 

	    if (curRow[34].includes("rugby match schedules/results")) {
	        Q11_rugby_match_schedules_results++;
	    }


	    //////Q12
	    if(curRow[35].includes("lack of Wi-Fi")) {
	        q12_lack_WiFi++;
	    }

	    if (curRow[35].includes("lack of English signage in stations and tourist sites")) {
	        q12_lack_english_signage++;
	    }

	    if (curRow[35].includes("public transport difficulties")) {
	        q12_transport_difficulties++;
	    }

	    if (curRow[35].includes("lack of credit card payment facilities")) {
	        q12_lack_card_payment++;
	    }

	    if (curRow[35].includes("lack of English on tourist information websites.")) {
	        q12_lack_english_websites++;
	    }


	    //Q13

	    if(curRow[36].includes("Train")) {
	        q13_Train++;
	    }

	    if (curRow[36].includes("Bus")) {
	        q13_Bus++;
	    }

	    if (curRow[36].includes("Taxi")) {
	        q13_Taxi++;
	    }

	    if (curRow[36].includes("Rental car")) {
	        q13_Rental_car++;
	    }

	    if (curRow[36].includes("unsure")) {
	        q13_unsure++;
	    }

	    //Q14
	    switch(curRow[37]){
	        case 'Yes':
	        q14_yes++;
	        break;
	        case 'No':
	        q14_no++;
	        break;
	    }

	    //Q15////
	    if (curRow[38]==='Yes') {
	        Q15_yes++;
	    }else {
	        Q15_no++;
	    }


	    //Q16////
	    var comment = curRow[39].toLowerCase();
	    comment = comment.trim();

	    if(uniqueComment[comment] === undefined) {
	     uniqueComment[comment]=0;
	     uniqueComment[comment]++;

	    }else{
	        uniqueComment[comment]++;
	    }

	    //Q17
	    switch(curRow[42]){
	        case 'Yes':
	        q17_yes++;
	        break;
	        case 'No':
	        q17_no++;
	        break;
	    }

	}
	///////////////
	//CHART
	///////////////



	var ctx1 = document.getElementById('testGender').getContext('2d');
	var myPieChart = new Chart(ctx1, {
	    type: 'pie',
	    data : {
	        datasets: [{
	            data: [gender_female, gender_male, gender_not_say, gender_other],
	            backgroundColor: colors,
	            label: 'What\'s your gender'

	        }],

	        labels: [
	            'Female',
	            'Male',
	            'Prefer not to say',
	            'Other'
	        ]    
	    },

	    options: {
	// We add a title to the chart
	        title: {
	            display: true,
	            value: 'top',
	            text: 'Gender',
	            fontSize: 25,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        }
	    }
	});



	//Age


	var ctx2 = document.getElementById('testAge').getContext('2d');
	var myPieChart1 = new Chart(ctx2, {
	    type: 'pie',
	    data : {
	        datasets: [{
	            data: [age_20, age_30, age_40, age_50, age_60],
	            backgroundColor: colors,
	            label: 'What\'s your age'
	        
	        }],

	        labels: [
	            '20s',
	            '30s',
	            '40s',
	            '50s',
	            '60+'
	        ]    

	    },

	    options: {
	    // We add a title to the chart
	          title: {
	            display: true,
	            value: 'top',
	            text: 'Age',
	            fontSize: 25,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        }
	}

	});

	//NAIONALITY//////




	var ctx3 = document.getElementById('testNationalities').getContext('2d');
	var myBarChart = new Chart(ctx3, {
	// The type of chart we want to create
	type: 'pie',
	// The data for our dataset
	data: {
	    labels: Object.keys(uniqueNationality),
	    datasets: [{
	        backgroundColor: colors,
	        data: Object.values(uniqueNationality),
	    }]
	},

	// Configuration options go here
	options: {
	    legend: {
	        // display: false,
	    },
	// We add a title to the chart
	title: {
	    display: true,
	    value: 'top',
	    text: 'Nationalities',
	    fontSize: 25,
	    fontFamily : 'Arial',
	    fontStyle : 'bold', 
	},
	// We add an animation to the chart
	animation: {
	    duration: 1000,
	}
	}
	});



	//Q1

	var ctx4 = document.getElementById('testQ1').getContext('2d');
	var myPieChart2 = new Chart(ctx4, {
	    type: 'pie',
	    data : {
	        datasets: [{
	            data: [answer1Yes, answer1No],
	            backgroundColor: colors,
	            label: 'Q1 - Are you aware that Twelve cities in Japan has been selected as a Rugby WorldCup 2019　Host City?'
	        
	        }],

	        labels: [
	            'Yes',
	            'No'
	        ]    

	    },

	    options: {
	    // We add a title to the chart
	        title: {
	            display: true,
	            value: 'top',
	            text: 'Q1',
	            fontSize: 25,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        },

	}

	});


	//Q1bis

	var ctx5 = document.getElementById('Q1bis').getContext('2d');
	var myBarChart2 = new Chart(ctx5, {
	    // The type of chart we want to create
	    type: 'horizontalBar',

	    // The data for our dataset
	    data: {
	        labels: ["Sapporo City", "Iwate Prefecture, Kamaishi City", "Tokyo Metropolitan", "Saitama Prefecture, Kumagaya City", "Kanagawa Prefecture, Yokohama City", "Shizuoka Prefecture", "Aichi Prefecture, Toyota City", "Kobe City ", "Osaka Prefecture, Higashi-Osaka City", "Fukuoka Prefecture, Fukuoka City", "Kumamoto Prefecture, Kumamoto City", "Oita Prefecture"],
	        datasets: [{
	            backgroundColor: colors,
	            borderColor: 'rgb(0, 128, 255)',
	            data: [q1_sapporo, q1_iwate, q1_tokyo, q1_saitama, q1_kanagawa, q1_shizuoka, q1_aichi, q1_kobe, q1_osaka, q1_fukuoka, q1_kumamoto, q1_oita],
	            label: 'City'
	        }]
	    },

	    // Configuration options go here
	    options: {
	    // We add a title to the chart
	          title: {
	            display: true,
	            value: 'top',
	            text: 'Q1bis',
	            fontSize: 35,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        },
	    // We add an animation to the chart
	        animation: {
	            duration: 1000,
	            }
	    }
	});


	//Q2//////////


	var ctx6 = document.getElementById('Q2').getContext('2d');
	var myPieChart3 = new Chart(ctx6, {
	    type: 'pie',
	    data: {
	        labels: ['Yes', 'No'],
	        datasets: [{
	            backgroundColor: colors,
	            label: 'Q2',
	            data:[Q2_yes, Q2_no]

	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q2',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});

	//Q2Bis////////////////


	var ctx7 = document.getElementById('Q2bis').getContext('2d');
	var myBarChart3 = new Chart(ctx7, {
	    // The type of chart we want to create
	    type: 'horizontalBar',

	    // The data for our dataset
	    data: {
	        labels: ["Sapporo City", "Iwate Prefecture, Kamaishi City", "Tokyo Metropolitan", "Saitama Prefecture, Kumagaya City", "Kanagawa Prefecture, Yokohama City", "Shizuoka Prefecture", "Aichi Prefecture, Toyota City", "Kobe City ", "Osaka Prefecture, Higashi-Osaka City", "Fukuoka Prefecture, Fukuoka City", "Kumamoto Prefecture, Kumamoto City", "Oita Prefecture"],
	        datasets: [{
	            backgroundColor: colors,
	            borderColor: 'rgb(0, 128, 255)',
	            data: [q2_sapporo, q2_iwate, q2_tokyo, q2_saitama, q2_kanagawa, q2_shizuoka, q2_aichi, q2_kobe, q2_osaka, q2_fukuoka, q2_kumamoto, q2_oita],
	            label: '# of visits'
	        }]
	    },

	    // Configuration options go here
	    options: {
	    // We add a title to the chart
	        title: {
	            display: true,
	            value: 'top',
	            text: 'Q2 bis',
	            fontSize: 35,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        },
	    // We add an animation to the chart
	        animation: {
	            duration: 1000,
	        }
	    }
	});


	/////////Q3

	var ctx8 = document.getElementById('Q3').getContext('2d');
	var myPieChart4 = new Chart(ctx8, {
	    type: 'pie',
	    data: {
	        labels: ['Yes', 'No'],
	        datasets: [{
	            backgroundColor: colors,
	            label: 'Q2',
	            data:[Q3_yes, Q3_no]

	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q3',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});

	/////Q3BIS

	var ctx9 = document.getElementById('Q3bis').getContext('2d');
	var myBarChart1 = new Chart(ctx9, {
	    // The type of chart we want to create
	    type: 'horizontalBar',

	    // The data for our dataset
	    data: {
	        labels: ["Aomori Prefecture", "Iwate Prefecture", "Miyagi Prefecture", "Akita Prefecture", "Yamagata Prefecture", "Fukushima_Prefecture"],
	        datasets: [{
	            backgroundColor: colors,
	            borderColor: 'rgb(0, 128, 255)',
	            data: [q3_Aomori_Prefecture, q3_Iwate_Prefecture, q3_Miyagi_Prefecture, q3_Akita_Prefecture, q3_Yamagata_Prefecture, q3_Fukushima_Prefecture],
	            label: '# of visits'
	        }]
	    },

	    // Configuration options go here
	    options: {
	    // We add a title to the chart
	        title: {
	            display: true,
	            value: 'top',
	            text: 'Q3 bis',
	            fontSize: 35,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        },
	    // We add an animation to the chart
	        animation: {
	            duration: 1000,
	        }
	    }
	});


	////Q4



	var ctx10 = document.getElementById('Q4').getContext('2d');
	var myBarChart4 = new Chart(ctx10, {
	    // The type of chart we want to create
	    type: 'horizontalBar',

	    // The data for our dataset
	    data: {
	        labels: ["to visit UNESCO World Heritage Sites", "to enjoy traditional cuisine", "to enjoy Japanese sake (alcohol)", "to experience naturey", "to visit tourist sites", "to see local festivals","to ride local trains","to enjoy hot springs","to go shopping","to watch sports","to participate in hands-on experiences/events","to meet local people","to learn about the earthquake/tsunami disaster","to learn about local history and culture"],
	        datasets: [{
	            backgroundColor: colors,
	            borderColor: 'rgb(0, 128, 255)',
	            data: [q4_unesco, q4_cuisine, q4_sake, q4_nature, q4_tourist_sites, q4_festivals,q4_trains,q4_springs,q4_shopping,q4_sports,q4_events,q4_people,q4_tsunami,q4_culture],
	            // label: '# of visits'
	        }]
	    },

	    // Configuration options go here
	    options: {
	        legend: {
	            display: false
	        },
	    // We add a title to the chart
	        title: {
	            display: true,
	            value: 'top',
	            text: 'Q4',
	            fontSize: 35,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        },
	    // We add an animation to the chart
	        animation: {
	            duration: 1000,
	        }
	    }
	});

	////Q5

	var ctx11 = document.getElementById('Q5').getContext('2d');
	var myPieChart5 = new Chart(ctx11, {
	    type: 'pie',
	    data: {
	        labels: ['never', 'once', '2～3 times', '4～5 times', 'more than 6 times'],
	        datasets: [{
	            backgroundColor: colors,
	            label: 'Q5',
	            data:[q5_never, q5_once, q5_3times, q5_5times, q5_more6times]

	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q5',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});

	//Q6


	var ctx12 = document.getElementById('Q6').getContext('2d');
	var myPieChart6 = new Chart(ctx12, {
	    type: 'pie',
	    data: {
	        labels: ['1 day', '2～3 days', '4～6 days', '1 week', '2 week','more than 2 weeks'],
	        datasets: [{
	            backgroundColor: colors,
	            label: 'Q6',
	            data:[q6_1_day, q6_3_days, q6_6_days, q6_1_week, q6_2_weeks,q6_more_2_weeks]

	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q6',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});

	////Q7////////////////////


	var ctx13 = document.getElementById('Q7').getContext('2d');
	var myPieChart7 = new Chart(ctx13, {
	    type: 'pie',
	    data: {
	        labels: ['by yourself', 'with friends', 'with family', 'as a couple', 'in a group','other'],
	        datasets: [{
	            backgroundColor: colors,
	            label: 'Q7',
	            data:[q7_by_yourself, q7_with_friends, q7_with_family, q7_as_a_couple, q7_in_a_group,q7_other]

	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q7',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});

	///////Q8

	var ctx14 = document.getElementById('Q7bis').getContext('2d');
	var myPieChart8 = new Chart(ctx14, {
	    type: 'pie',
	    data: {
	        labels: ['stay in one place', 'stay in multiple cities'],
	        datasets: [{
	            backgroundColor: colors,
	            label: 'Q7bis',
	            data:[q7bis_stay_in_one_place, q7bis_stay_in_multiple_cities]

	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q7bis',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});


	////Q8

	var ctx15 = document.getElementById('Q8').getContext('2d');
	var myBarChart5 = new Chart(ctx15, {
	    // The type of chart we want to create
	    type: 'horizontalBar',

	    // The data for our dataset
	    data: {
	        labels: ["official tourism websites", "word-of-mouth", "social media", "blogs", "video-sharing websites（Youtube）", "travel agencies","travel guidebooks","T.V","magazines","friends","other"],
	        datasets: [{
	            backgroundColor: colors,
	            borderColor: 'rgb(0, 128, 255)',
	            data: [q8_official_tourism_websites, q8_word_of_mouth, q8_social_media, q8_blogs, q8_youtube, q8_travel_agencies,q8_travel_guidebooks,q8_tv,q8_magazines,q8_friends,q8_other],
	            // label: '# of visits'
	        }]
	    },

	    // Configuration options go here
	    options: {
	        legend: {
	            display: false
	        },
	    // We add a title to the chart
	        title: {
	            display: true,
	            value: 'top',
	            text: 'Q8',
	            fontSize: 35,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        },
	    // We add an animation to the chart
	        animation: {
	            duration: 1000,
	        }
	    }
	});


	//////Q9


	var ctx16 = document.getElementById('Q9').getContext('2d');
	var myPieChart9 = new Chart(ctx16, {
	    type: 'pie',
	    data: {
	        labels: ['through a travel agent', 'independently'],
	        datasets: [{
	            backgroundColor: colors,
	            label: 'Q9',
	            data:[q9_travel_agent, q9_independently]

	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q9',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});


	////Q10


	var ctx17 = document.getElementById('Q10').getContext('2d');
	var myBarChart10 = new Chart(ctx17, {
	    // The type of chart we want to create
	    type: 'horizontalBar',

	    // The data for our dataset
	    data: {
	        labels: ["smartphone", "tablet", "PC", "tourist guidebooks", "tourist information signs", "tourist information centers"],
	        datasets: [{
	            backgroundColor: colors,
	            borderColor: 'rgb(0, 128, 255)',
	            data: [q10_smartphone, q10_tablet, q10_PC, q10_guidebooks, q10_info_signs, q10_info_centers],
	            // label: '# of visits'
	        }]
	    },

	    // Configuration options go here
	    options: {
	        legend: {
	            display: false
	        },
	    // We add a title to the chart
	        title: {
	            display: true,
	            value: 'top',
	            text: 'Q10',
	            fontSize: 35,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        },
	    // We add an animation to the chart
	        animation: {
	            duration: 1000,
	        }
	    }
	});


	//Q11 ///////


	var ctx18 = document.getElementById('Q11').getContext('2d');
	var myBarChart8 = new Chart(ctx18, {
	    // The type of chart we want to create
	    type: 'horizontalBar',

	    // The data for our dataset
	    data: {
	        labels: ["free Wi-Fi spots", "transport information", "accommodation facilities", "bars and restaurants", "shopping facilities", "tourism facilities","souvenir shops","tourist events","ATM locations","currency exchange locations","rugby match schedules/results"],
	        datasets: [{
	            backgroundColor: colors,
	            borderColor: 'rgb(0, 128, 255)',
	            data: [q11_free_Wi_Fi_spots, q11_transport_information, q11_accommodation_facilities, q11_bars_and_restaurants, q11_shopping_facilities, q11_tourism_facilities,q11_souvenir_shops,q11_tourist_events,q11_ATM_locations,q11_currency_exchange_locations,Q11_rugby_match_schedules_results],
	            // label: '# of visits'
	        }]
	    },

	    // Configuration options go here
	    options: {
	        legend: {
	            display: false
	        },
	    // We add a title to the chart
	        title: {
	            display: true,
	            value: 'top',
	            text: 'Q11',
	            fontSize: 35,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        },
	    // We add an animation to the chart
	        animation: {
	            duration: 1000,
	        }
	    }
	});



	////Q12 

	var ctx19 = document.getElementById('Q12').getContext('2d');
	var myBarChart12 = new Chart(ctx19, {
	    // The type of chart we want to create
	    type: 'horizontalBar',

	    // The data for our dataset
	    data: {
	        labels: ["lack of Wi-Fi", "lack of English signage in stations and tourist sites", "public transport difficulties", "lack of credit card payment facilities", "lack of English on tourist information websites."],
	        datasets: [{
	            backgroundColor: colors,
	            borderColor: 'rgb(0, 128, 255)',
	            data: [q12_lack_WiFi, q12_lack_english_signage, q12_transport_difficulties, q12_lack_card_payment, q12_lack_english_websites],
	            // label: '# of visits'
	        }]
	    },

	    // Configuration options go here
	    options: {
	        legend: {
	            display: false
	        },
	    // We add a title to the chart
	        title: {
	            display: true,
	            value: 'top',
	            text: 'Q12',
	            fontSize: 35,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        },
	    // We add an animation to the chart
	        animation: {
	            duration: 1000,
	        }
	    }
	});



	// Q13 ///////



	var ctx20 = document.getElementById('Q13').getContext('2d');
	var myBarChart10 = new Chart(ctx20, {
	    // The type of chart we want to create
	    type: 'horizontalBar',

	    // The data for our dataset
	    data: {
	        labels: ["Train", "Bus", "Taxi", "Rental car", "unsure"],
	        datasets: [{
	            backgroundColor: colors,
	            borderColor: 'rgb(0, 128, 255)',
	            data: [q13_Train, q13_Bus, q13_Taxi, q13_Rental_car, q13_unsure],
	            // label: '# of visits'
	        }]
	    },

	    // Configuration options go here
	    options: {
	        legend: {
	            display: false
	        },
	    // We add a title to the chart
	        title: {
	            display: true,
	            value: 'top',
	            text: 'Q13',
	            fontSize: 35,
	            fontFamily : 'Arial',
	            fontStyle : 'bold', 
	        },
	    // We add an animation to the chart
	        animation: {
	            duration: 1000,
	        }
	    }
	});




	//// Q14

	var ctx21 = document.getElementById('Q14').getContext('2d');
	var myPieChart14 = new Chart(ctx21, {
	    type: 'pie',
	    data: {
	        labels: ['Yes', 'No'],
	        datasets: [{
	            backgroundColor: colors,
	            label: 'Q14',
	            data:[q14_yes, q14_no]

	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q14',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});

	//// Q15

	var ctx22 = document.getElementById('Q15').getContext('2d');
	var myPieChart11 = new Chart(ctx22, {
	    type: 'pie',
	    data: {
	        labels: ['Yes', 'No'],
	        datasets: [{
	            backgroundColor: colors,
	            label: 'Q15',
	            data:[Q15_yes, Q15_no]

	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q15',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});
	/////Q16


	var ctx24 = document.getElementById('Q16').getContext('2d');
	var myPieChart18 = new Chart(ctx24, {
	    type: 'pie',
	    data: {

	        labels: Object.keys(uniqueComment),
	        datasets: [{
	            backgroundColor: colors,
	            data: Object.values(uniqueComment),
	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q16',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});

	//// Q17

	var ctx23 = document.getElementById('Q17').getContext('2d');
	var myPieChart17 = new Chart(ctx23, {
	    type: 'pie',
	    data: {
	        labels: ['Yes', 'No'],
	        datasets: [{
	            backgroundColor: colors,
	            label: 'Q17',
	            data:[q17_yes, q17_no]

	        }],
	        options: {
	        // We add a title to the chart
	            title: {
	                display: true,
	                value: 'top',
	                text: 'Q17',
	                fontSize: 25,
	                fontFamily : 'Arial',
	                fontStyle : 'bold', 
	            },

	        },
	        animation: {
	            duration: 1000,
	        }
	    }
	});

}