//set global valuable
channels = [];

function processingInSlack() {
	setChannelsName();
	getChannelIdsFromName();
	getPinnedItems();
}

function setChannelsName(){
	//one
	channels[0] = {};
	channels[0].name = "times_acchan";

	//two...
	// channels[1] = {};
	// channels[1].name = "";
}

function getChannelIdsFromName(){
	var requestURLForGetChannelList = getChannelListApiUrl + "?token=" + slackApiToken;
	var returnValue = UrlFetchApp.fetch(requestURLForGetChannelList);
	var channelList = JSON.parse(returnValue.getContentText()).channels;

	for(var i = 0; i < channels.length; i++){
		for(var j = 0; j < channelList.length; j++){
			if(channels[i].name == channelList[j].name){
				channels[i].id = channelList[j].id;
				break;
			}
		}
	}
}

function getPinnedItems(){
	for(var i = 0; i < channels.length; i++){
		var requestUrlForGetPinnedItem = getPinnedItemApiUrl + "?token=" + slackApiToken + "&channel=" + channels[i].id;
		var returnValue = UrlFetchApp.fetch(requestUrlForGetPinnedItem);
		channels[i].pinnedItems = JSON.parse(returnValue.getContentText()).items;
	}
}

