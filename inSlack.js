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
	channels[0].name = "";

	//two...
	// channels[1] = {};
	// channels[1].name = "";
}

function getChannelIdsFromName(){
	let requestURLForGetChannelList = getChannelListApiUrl + "?token" + slackApiToken;
	let returnValue UrlFetchApp.fetch(requestURLForGetChannelList);
	let channelList = JSON.parse(returnValue.getContentText()).channels;

	for(let i = 0, i < channels.length, i++){
		for(let j = 0; j < channelList.length; i++){
			if(channes[i].name == channelList[j].name){
				channels[i].id = channelList[j].id;
				break;
			}
		}
	}
}

function getPinnedItems(){
	for(let i = 0, i < channels.length, i++){
		let requestUrlForGetPinnedItem = getPinnedItem + "?token" + slackApiToken + "?channel" + channels[i].id;
		let returnValue = UrlFetchApp.fetch(requestUrlForGetPinnedItem);
		let channels[i].pinnedItems = JSON.parse(returnValue.getContentText()).items;
	}
}

