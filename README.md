# Roblox game promotion panel system
This system makes uses of Roblox's third party API feature to create a promotion panel in game, which allows users to promote the community rank of other players in-game
![image alt](https://github.com/mxsicz1/asrcomputingShowcase/blob/7cd9c0e1720625afa51d1c2cf0c97e6979674ea2/Images/UI.png)

For context:
Normally, players are only able to do so on the actual website, Roblox.com, navigating to the desired community to manually modify the rank of a player

Main script logic is done on Roblox Studios, which program can be seen in "https://github.com/mxsicz1/asrcomputingShowcase/tree/main/Roblox%20Scripts" (asrcomputingShowcase/Roblox Scripts)

**serverHandler** and ranking scripts can be found in below hierarchy
![image alt](https://github.com/mxsicz1/asrcomputingShowcase/blob/dd3a2dd8cd973f5416c687b714fc23e0526dc22a/Images/Server_Hierarchy.png)
"ranking" is a module script which connects to the gitHub repository through free third-party web service hosting by "Render.com", URL: "https://aba-automation.onrender.com/"

At the same time, **serverHandler** would send a notification onto the preset Discord server determined by the Discord server's webhook.
Since Roblox has banned Discord API from being used in its games, third-party services was used to change the WebhookProxy of the original Discord webhook. ("https://webhook.lewisakura.moe/api/webhooks/1377612182027501649/RLYuC59t02bAbwtnW3Eqst4pEirvZ7Pf5OlPHLDkVh911ymMX-6d-My-pCwSie29pdcG")
![image alt](https://github.com/mxsicz1/asrcomputingShowcase/blob/7cd9c0e1720625afa51d1c2cf0c97e6979674ea2/Images/DiscordMessage.png)

**localHandler** communicates player data with **serverHandler** through RemoteEvents, as seen in **localHandler line 115** where player data is sent, and **serverHandler lines 15-31**, where data is received and added to queue.
The system updates a player's rank, whose data is stored in a queue, every 20 seconds **(serverHandler line 45)**, to prevent rate limitation.
![image alt](https://github.com/mxsicz1/asrcomputingShowcase/blob/7cd9c0e1720625afa51d1c2cf0c97e6979674ea2/Images/UI_Hierarchy.png)
