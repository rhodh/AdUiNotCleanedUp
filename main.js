/* global videojs*/

const adTag = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator="
let player = null;
document.addEventListener("DOMContentLoaded", () => {
	player = videojs("videoPlayer", {autoplay: true});
	player.ima({id: 'videoPlayer'});
});

function playStream(url, adTagURL){
	const source = {
		src: url,
		type: "application/dash+xml"
	};

	player.ima.changeAdTag(adTagURL);
	if (adTagURL) {
		player.ima.requestAds();
	}
	player.src(source);
}

function playStreamOne(){
	playStream("http://rdmedia.bbc.co.uk/dash/ondemand/bbb/2/client_manifest-common_init.mpd", adTag);
}

function playStreamTwo(){
	playStream("http://rdmedia.bbc.co.uk/dash/ondemand/elephants_dream/1/client_manifest-all.mpd");
}
