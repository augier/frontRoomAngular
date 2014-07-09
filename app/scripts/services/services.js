'use strict';

angular.module('frontRoomApp.services', [])
	.factory('myServices', function($http, $q) {

		var posts = [
			{ id: 1, type: 'song', imgUrl: 'https://fbexternal-a.akamaihd.net/safe_image.php?d=AQB-TAbI4vqPCsyc&w=398&h=208&url=http%3A%2F%2Ffactmag-images.s3.amazonaws.com%2Fwp-content%2Fuploads%2F2014%2F02%2Fneutralmilk-2.13.2014.jpg&cfs=1&sx=0&sy=2&sw=685&sh=358', caption: 'Jabberwocky festival hits London with Neutral Milk Hotel, Kode9, Earth and more'},
			{ id: 2, type: 'song', imgUrl: 'ttps://fbexternal-a.akamaihd.net/safe_image.php?d=AQC2v5Ljh3BohCxP&w=90&h=90&url=http%3A%2F%2Fwww.thealbany.org.uk%2Fthumbs%2F9b93ea839faec51b278aa66db89ff6af.jpg&cfs=1', caption: 'Prozess'},
			{ id: 3, type: 'song', imgUrl: 'https://fbexternal-a.akamaihd.net/safe_image.php?d=AQCmEwMLpfnbLATX&w=398&h=208&url=http%3A%2F%2Fcdn3.sbnation.com%2Fentry_photo_images%2F9837139%2F227519143_7c72cf575a_b_large_verge_super_wide.jpg&cfs=1', caption: 'Download every De La Soul album for free today'},
			{ id: 4, type: 'song', imgUrl: 'http://f0.bcbits.com/img/a0909450804_2.jpg', caption: 'Sulfites from Modern Day Minerals by Pursuit Grooves'},
			{ id: 5, type: 'song', imgUrl: 'http://www.ovalspace.co.uk/media/original/52d4345e27e97/800x9999.jpg', caption: 'Oval Space'},
			{ id: 6, type: 'event', imgUrl: 'http://f0.bcbits.com/img/a0909450804_2.jpg', caption: 'Sulfites from Modern Day Minerals by Pursuit Grooves'},
			{ id: 7, type: 'event', imgUrl: 'http://f0.bcbits.com/img/a0909450804_2.jpg', caption: 'Sulfites from Modern Day Minerals by Pursuit Grooves'},
			{ id: 8, type: 'event', imgUrl: 'http://f0.bcbits.com/img/a0909450804_2.jpg', caption: 'Sulfites from Modern Day Minerals by Pursuit Grooves'},
			{ id: 9, type: 'event', imgUrl: 'http://f0.bcbits.com/img/a0909450804_2.jpg', caption: 'Sulfites from Modern Day Minerals by Pursuit Grooves'},
			{ id: 10, type: 'event', imgUrl: 'http://f0.bcbits.com/img/a0909450804_2.jpg', caption: 'Sulfites from Modern Day Minerals by Pursuit Grooves'},
			{ id: 11, type: 'event', imgUrl: 'http://f0.bcbits.com/img/a0909450804_2.jpg', caption: 'Sulfites from Modern Day Minerals by Pursuit Grooves'}
		];

		//service object
		var service = {

			postsService: {

				/**
				 *	getPosts
				 *	returns the hard-coded posts
				 */
				getPosts: function() {

					var deferred = $q.defer();

					deferred.resolve(posts);

					return deferred.promise;

				},

				getPost: function(id) {
					
					var deferred = $q.defer();

					for(post in posts) {

						if(post.id = id) {

							deferred.resolve(post);

						}

					}

					return deferred.promise;

				}

			}

		};

		return service;

	});