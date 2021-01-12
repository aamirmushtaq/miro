# Add a Sticky Note with Today's Date in the Center of the Board 

## Introduction
This Miro web-plugin sample shows you how to add a sticky note containing today's date (in the default locale format), with a single click of a button in the bottom bar. The sticky note is also strategically added in the center of the current board view for better visibility. 

![Web-plugin sample demo image](http://mirabalani.github.io/miro/demoimage.gif)

This web-plugin sample demonstrates the following Miro Web SDK functionalities:
- Adding a button in the bottom bar
- Creating a widget
- Positioning a widget on the board
- Modifying a board's content

To try out this web-plugin sample from start to finish: 

1. [Download the Web-plugin Sample](#step1)
2. [Host the Web-plugin Sample](#step2)
3. [Build your App in Miro](#step3)

	3.1. [Create the Developer Team in Miro (if you already have a Dev team in Miro, skip this step)](#step31)

	3.2. [Create your App in Miro](#step32)
	
	3.3. [Configure your App in Miro](#step33)
	
4. [Test your App in Miro](#step4)


## <a name="step1"></a>Step 1: Download the Web-plugin Sample
    git clone https://github.com/mirabalani/miro.git 

## <a name="step2"></a>Step 2: Host the Web-plugin Sample
Host the web-plugin files that you downloaded in [step 1](#step1) and make them accessible over **https** by using [GitHub Pages](https://pages.github.com), [Glitch](https://glitch.com/), [ngrok](https://ngrok.com/), or any other solution you prefer.  
> **Tip:** Keep the **index.html** URL  handy as you need it in the next step.

## <a name="step3"></a>Step 3: Build your App in Miro
### <a name="step31"></a>Step 3.1: Create the Developer Team in Miro
If you already have a Dev team in Miro, skip this step and proceed to [step 3.2](#step32). 

If you do not have a Dev team in Miro, log on to Miro, and then create a Developer team by clicking the following link: 

[Create Dev team in Miro](https://miro.com/app/dashboard/?createDevTeam=1)
> **Note:** The Dev team is a special team type that allows you to build and test applications without having to worry about breaking anything on your live user boards. The Dev team has its [limitations](https://developers.miro.com/docs/differences-between-plans#section-developer-team-limitation) and you must not use it for remote collaboration.

### <a name="step32"></a>Step 3.2: Create your App in Miro
1. Navigate to the **API, SDK & Embed** page by clicking the following link:

	[API, SDK, & Embed page](https://miro.com/app/settings/user-profile/apps)

2. Click **I agree to the Terms and Conditions**.

3. Click **Create new app**.

4. In the Create new app box, type a name and description for this app, ensure that the **Dev team** is selected, and then click **Create app**.

### <a name="step33"></a>Step 3.3: Configure your App in Miro
After you create your app, the app configuration page appears listing all the settings for your app. You can configure, update, or use these settings for test or integration purpose. 

For this Web-plugin sample, configure the following app settings:
1. In the Web-plugin URL box, provide the URL for the **index.html** file that you hosted over https in [step 2](#step2), and then click **Save**.  For example, if you hosted your files by using GitHub Pages, your Web-plugin URL is **https://<nickname<nickname>>.github.io/miro/app-examples/stickywithdate/index.html**. 
	> Note: You must click **Save** to configure the Web-plugin URL. If you provide the Web-plugin URL and you do not click **Save**, your Web-plugin URL is not configured and your Web-plugin will not work. 

2. In the OAuth scopes section:
	
	2.a. As this web-plugin sample is adding a widget and modifying the board, select the **boards:write** check box. 
	
	2.b. Click **Install app and get OAuth Token**.
	
	2.c. In the **Install app to get OAuth token** window, choose the team for which you want to install the app. For this Web-plugin sample, click the **Install** button located beside the Dev team.
	
	2.d. A message appears confirming that your app is installed. Close the window. 

## <a name="step4"></a>Step 4: Test your App in Miro
1. Navigate to the Dev Team board as you installed this web-plugin sample for the Dev team. 

2. Create a new board or open an existing board.

3. At the right-most corner of the bottom bar, click the square button. You should see a sticky note containing today's date (in the default locale format), at the center of the current board view.  
	![Web-plugin sample demo image](http://mirabalani.github.io/miro/demoimage.gif)


