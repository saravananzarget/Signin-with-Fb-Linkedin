// Setup an event listener to make an API call once auth is complete

		function onLinkedInLoad() {
        IN.Event.on(IN, "auth", getProfileData);
    }


		  // var getProfileData = function() { // Use the API call wrapper to request the member's basic profile data
    //     IN.API.Profile("me").fields("id,firstName,lastName,picture-urls::(original),public-profile-url,location:(name)").result(function (me) {
    //         var profile = me.values[0];
    //         var id = profile.id;
    //         var firstName = profile.firstName;
    //         var lastName = profile.lastName;
    //         var pictureUrl = profile.pictureUrls.values[0];
    //         var profileUrl = profile.publicProfileUrl;
    //         var country = profile.location.name;
    //         document.getElementById('Linkedin_User_Details').innerHTML = '\Linked in Account\'s <br> FirstName= '+firstName+' <br> LastName= '+lastName+' <br> Country= '+country;
    //     });
    // }

    function onLinkedInLoad() {
        IN.Event.on(IN, "auth", getProfileData);
    }

    // Handle the successful return from the API call
    function onSuccess(data) {
        console.log(data);
    }

    // Handle an error response from the API call
    function onError(error) {
        console.log(error);
    }

    // POST /oauth/v2/accessToken HTTP/1.1
    // Host: www.linkedin.com
    // Content-Type: application/x-www-form-urlencoded
    // grant_type=authorization_code&code=987654321&redirect_uri=http%3A%2F%2Fsaravanancm.local%3A8080%2Fzarget%2Fsignup.html&client_id=81gaoi03xf4zww&client_secret=rruWwxTjYlhczI8h


    function OnLinkedInFrameworkLoad() {
		  IN.Event.on(IN, "auth", OnLinkedInAuth);
		}

		function OnLinkedInAuth() {
    	IN.API.Profile("me").result(ShowProfileData);
		}
		var liLogin = function() { // Setup an event listener to make an API call once auth is complete
        IN.UI.Authorize().params({"scope":["r_basicprofile", "r_emailaddress"]}).place();
        IN.Event.on(IN, 'auth', getProfileData);
    }

    var getProfileData = function() { // Use the API call wrapper to request the member's basic profile data
        IN.API.Profile("me").fields("id,firstName,lastName,email-address,picture-urls::(original),public-profile-url,location:(name)").result(function (me) {
            var profile = me.values[0];
            var id = profile.id;
            var firstName = profile.firstName;
            var lastName = profile.lastName;
            var emailAddress = profile.emailAddress;
            var pictureUrl = profile.pictureUrls.values[0];
            var profileUrl = profile.publicProfileUrl;
            var country = profile.location.name;
        });
    }
	

    // Use the API call wrapper to request the member's basic profile data
    function getProfileData() {
        IN.API.Raw("/people/~").result(onSuccess).error(onError);
    }