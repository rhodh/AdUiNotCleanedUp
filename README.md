# ContribAdsRaceConditionIssue
A demo sample code showing the race condition in Videojs-Contrib-Ads

## How to reproduce
1) Run `run-python-simple-server.bat`.
2) Navigate to `http://localhost:8282/` in Chrome Browser.
2) Play stream 1 and wait till IMA adverts have appeared.
3) Zap to stream 2 and see that the AdUI is still visible.

