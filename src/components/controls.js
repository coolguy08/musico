import { GetSongs, GetSongURL } from "../requests";

const audio=document.getElementById('player');

let songs=[
   {
      "id": "TW-Vl9uz",
      "title": "Khoya Khoya Chand Khula Aasman",
      "subtitle": "Mohammed Rafi - Kala Bazar",
      "header_desc": "Track from Mohammed Rafi from album Kala Bazar.",
      "type": "song",
      "perma_url": "https://www.jiosaavn.com/song/khoya-khoya-chand-khula-aasman/JD9GZxgJQkk",
      "image": "https://c.saavncdn.com/538/Kala-Bazar-Hindi-1960-20200901153908-150x150.jpg",
      "language": "hindi",
      "year": "1960",
      "play_count": "9217950",
      "explicit_content": "0",
      "list_count": "0",
      "list_type": "",
      "list": "",
      "more_info": {
        "music": "Mohammed Rafi, S. D. Burman",
        "album_id": "1033494",
        "album": "Kala Bazar",
        "label": "Saregama",
        "origin": "playlist",
        "is_dolby_content": false,
        "320kbps": "true",
        "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy7uY5ETS7eFbJ4oTXrCyQbUXITZo1/+wGHG4JMUMzI2sRrUxLYpvSbBw7tS9a8Gtq",
        "encrypted_cache_url": "",
        "album_url": "https://www.jiosaavn.com/album/kala-bazar/D6-3J28qhDk_",
        "duration": "280",
        "rights": {
          "code": "0",
          "cacheable": "true",
          "delete_cached_object": "false",
          "reason": ""
        },
        "cache_state": "",
        "has_lyrics": "true",
        "lyrics_snippet": "khoyaa khoyaa chaand, khulaa aasmaan",
        "starred": "false",
        "copyright_text": "℗ 1960 Saregama India Ltd",
        "artistMap": {
          "primary_artists": [
            {
              "id": "505312",
              "name": "Mohammed Rafi",
              "role": "primary_artists",
              "image": "http://c.saavncdn.com/artists/Mohammed_Rafi_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mohammed-rafi/UY8fLYUk,Uo_"
            }
          ],
          "featured_artists": [],
          "artists": [
            {
              "id": "505312",
              "name": "Mohammed Rafi",
              "role": "music",
              "image": "http://c.saavncdn.com/artists/Mohammed_Rafi_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mohammed-rafi/UY8fLYUk,Uo_"
            },
            {
              "id": "887312",
              "name": "S. D. Burman",
              "role": "music",
              "image": "http://c.saavncdn.com/artists/S_D_Burman_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/s.-d.-burman/FRKH9Z9gUx4_"
            },
            {
              "id": "457181",
              "name": "Shailendra",
              "role": "lyricist",
              "image": "http://c.saavncdn.com/332/Hanuman-Chutki-1998-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/shailendra/sfhcCeHXxzU_"
            }
          ]
        },
        "release_date": "1960-01-01",
        "label_url": "/label/saregama-albums/MNccah3udrQ_",
        "vcode": "010910080575722",
        "vlink": "https://jiotunepreview.jio.com/content/Converted/010910080543406.mp3",
        "triller_available": false,
        "lyrics_id": ""
      }
    },
    {
      "id": "WSG2DDKb",
      "title": "Dil Ka Bhanwar",
      "subtitle": "S. D. Burman, Mohammed Rafi - Tere Ghar Ke Samne",
      "header_desc": "Track from S. D. Burman and Mohammed Rafi from album Tere Ghar Ke Samne.",
      "type": "song",
      "perma_url": "https://www.jiosaavn.com/song/dil-ka-bhanwar/JzssAzB0fFE",
      "image": "https://c.saavncdn.com/978/Tere-Ghar-Ke-Samne-Hindi-1963-20200901153926-150x150.jpg",
      "language": "hindi",
      "year": "1963",
      "play_count": "3805699",
      "explicit_content": "0",
      "list_count": "0",
      "list_type": "",
      "list": "",
      "more_info": {
        "music": "S. D. Burman",
        "album_id": "1141582",
        "album": "Tere Ghar Ke Samne",
        "label": "Saregama",
        "origin": "playlist",
        "is_dolby_content": false,
        "320kbps": "true",
        "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyJQvw9ZcnL0coTs/BPzwEGFkkOJVqwxJ8sFej1TKr9MLY5MgyI5PZMxw7tS9a8Gtq",
        "encrypted_cache_url": "",
        "album_url": "https://www.jiosaavn.com/album/tere-ghar-ke-samne/8kNFEtl6pzE_",
        "duration": "271",
        "rights": {
          "code": "0",
          "cacheable": "true",
          "delete_cached_object": "false",
          "reason": ""
        },
        "cache_state": "",
        "has_lyrics": "false",
        "lyrics_snippet": "",
        "starred": "false",
        "copyright_text": "©  1963 Saregama",
        "artistMap": {
          "primary_artists": [
            {
              "id": "887312",
              "name": "S. D. Burman",
              "role": "primary_artists",
              "image": "http://c.saavncdn.com/artists/S_D_Burman_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/s.-d.-burman/FRKH9Z9gUx4_"
            },
            {
              "id": "505312",
              "name": "Mohammed Rafi",
              "role": "primary_artists",
              "image": "http://c.saavncdn.com/artists/Mohammed_Rafi_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mohammed-rafi/UY8fLYUk,Uo_"
            }
          ],
          "featured_artists": [],
          "artists": [
            {
              "id": "887312",
              "name": "S. D. Burman",
              "role": "music",
              "image": "http://c.saavncdn.com/artists/S_D_Burman_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/s.-d.-burman/FRKH9Z9gUx4_"
            },
            {
              "id": "505312",
              "name": "Mohammed Rafi",
              "role": "singer",
              "image": "http://c.saavncdn.com/artists/Mohammed_Rafi_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mohammed-rafi/UY8fLYUk,Uo_"
            },
            {
              "id": "456077",
              "name": "Hasrat Jaipuri",
              "role": "lyricist",
              "image": "http://c.saavncdn.com/413/An-Evening-In-Paris-1967-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/hasrat-jaipuri/eeiwe2-9NT0_"
            },
            {
              "id": "456755",
              "name": "Dev Anand",
              "role": "starring",
              "image": "http://c.saavncdn.com/artists/Dev_Anand_002_20191127083544_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/dev-anand/2N1teS,fYCQ_"
            },
            {
              "id": "457245",
              "name": "Nutan",
              "role": "starring",
              "image": "http://c.saavncdn.com/artists/Nutan_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/nutan/YF2b88rkAsQ_"
            }
          ]
        },
        "release_date": "1963-01-01",
        "label_url": "/label/saregama-albums/MNccah3udrQ_",
        "triller_available": false
      }
    },
    {
      "id": "Rd1XXJeX",
      "title": "Aap Ki Nazron Ne Samjha",
      "subtitle": "Lata Mangeshkar, Madan Mohan - Anpadh",
      "header_desc": "Track from Lata Mangeshkar and Madan Mohan from album Anpadh.",
      "type": "song",
      "perma_url": "https://www.jiosaavn.com/song/aap-ki-nazron-ne-samjha/IgxaaSx6Ums",
      "image": "https://c.saavncdn.com/178/Anpadh-1961-150x150.jpg",
      "language": "hindi",
      "year": "1961",
      "play_count": "6346896",
      "explicit_content": "0",
      "list_count": "0",
      "list_type": "",
      "list": "",
      "more_info": {
        "music": "Madan Mohan",
        "album_id": "1142569",
        "album": "Anpadh",
        "label": "Saregama",
        "origin": "playlist",
        "is_dolby_content": false,
        "320kbps": "true",
        "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDyBY6Py4Au5L4TmzSXG3QJAwGORVSxTIdpGOxi482kmeCHT58NkkW7GRw7tS9a8Gtq",
        "encrypted_cache_url": "",
        "album_url": "https://www.jiosaavn.com/album/anpadh/cZFq6wRcK6g_",
        "duration": "439",
        "rights": {
          "code": "0",
          "cacheable": "true",
          "delete_cached_object": "false",
          "reason": ""
        },
        "cache_state": "",
        "has_lyrics": "true",
        "lyrics_snippet": "dil kii i dhadkan thahar ja",
        "starred": "false",
        "copyright_text": "©  1961 Saregama",
        "artistMap": {
          "primary_artists": [
            {
              "id": "455109",
              "name": "Lata Mangeshkar",
              "role": "primary_artists",
              "image": "http://c.saavncdn.com/artists/Lata_Mangeshkar_002_20200212082631_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/lata-mangeshkar/FCtl69DObYg_"
            },
            {
              "id": "455994",
              "name": "Madan Mohan",
              "role": "primary_artists",
              "image": "http://c.saavncdn.com/artists/Madan_Mohan_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/madan-mohan/W8lFJ1BhBDk_"
            }
          ],
          "featured_artists": [],
          "artists": [
            {
              "id": "455994",
              "name": "Madan Mohan",
              "role": "music",
              "image": "http://c.saavncdn.com/artists/Madan_Mohan_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/madan-mohan/W8lFJ1BhBDk_"
            },
            {
              "id": "455109",
              "name": "Lata Mangeshkar",
              "role": "singer",
              "image": "http://c.saavncdn.com/artists/Lata_Mangeshkar_002_20200212082631_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/lata-mangeshkar/FCtl69DObYg_"
            },
            {
              "id": "455981",
              "name": "Raja Mehdi Ali Khan",
              "role": "lyricist",
              "image": "http://c.saavncdn.com/079/Geetmala-Ki-Chhaon-Mein-Vol-21-25-Hindi-2011-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/raja-mehdi-ali-khan/lXthJxcxHRA_"
            },
            {
              "id": "457011",
              "name": "Mala Sinha",
              "role": "starring",
              "image": "http://c.saavncdn.com/artists/Mala_Sinha_002_20191127084602_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mala-sinha/1dqIK-N9Bzs_"
            },
            {
              "id": "456614",
              "name": "Dharmendra",
              "role": "starring",
              "image": "http://c.saavncdn.com/artists/Dharmendra_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/dharmendra/jaJ9CBD89R8_"
            }
          ]
        },
        "release_date": "1961-12-31",
        "label_url": "/label/saregama-albums/MNccah3udrQ_",
        "vcode": "010910080030484",
        "vlink": "https://jiotunepreview.jio.com/content/Converted/010910080036238.mp3",
        "triller_available": false,
        "lyrics_id": ""
      }
    },
    {
      "id": "VddJgOZD",
      "title": "Chaudhvin Ka Chand Ho",
      "subtitle": "Mohammed Rafi - Chaudhvin Ka Chand",
      "header_desc": "Track from Mohammed Rafi from album Chaudhvin Ka Chand.",
      "type": "song",
      "perma_url": "https://www.jiosaavn.com/song/chaudhvin-ka-chand-ho/JgwPexN-bXc",
      "image": "https://c.saavncdn.com/899/Chaudhvin-Ka-Chand-Hindi-1960-20200831163838-150x150.jpg",
      "language": "hindi",
      "year": "1960",
      "play_count": "6589931",
      "explicit_content": "0",
      "list_count": "0",
      "list_type": "",
      "list": "",
      "more_info": {
        "music": "Mohammed Rafi, Ravi",
        "album_id": "1065191",
        "album": "Chaudhvin Ka Chand",
        "label": "Saregama",
        "origin": "playlist",
        "is_dolby_content": false,
        "320kbps": "true",
        "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDygSAOJh/OVXtRqy+RrW1fdOT9a1+QRKs8RuGebpQP2sXW74agfmW4eRw7tS9a8Gtq",
        "encrypted_cache_url": "",
        "album_url": "https://www.jiosaavn.com/album/chaudhvin-ka-chand/hM2z9XEehBU_",
        "duration": "224",
        "rights": {
          "code": "0",
          "cacheable": "true",
          "delete_cached_object": "false",
          "reason": ""
        },
        "cache_state": "",
        "has_lyrics": "false",
        "lyrics_snippet": "",
        "starred": "false",
        "copyright_text": "℗ 1960 Saregama India Ltd",
        "artistMap": {
          "primary_artists": [
            {
              "id": "505312",
              "name": "Mohammed Rafi",
              "role": "primary_artists",
              "image": "http://c.saavncdn.com/artists/Mohammed_Rafi_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mohammed-rafi/UY8fLYUk,Uo_"
            }
          ],
          "featured_artists": [],
          "artists": [
            {
              "id": "505312",
              "name": "Mohammed Rafi",
              "role": "music",
              "image": "http://c.saavncdn.com/artists/Mohammed_Rafi_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mohammed-rafi/UY8fLYUk,Uo_"
            },
            {
              "id": "455471",
              "name": "Ravi",
              "role": "music",
              "image": "http://c.saavncdn.com/562/Nikaah-Hindi-1982-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/ravi/h,KM8JvXRTA_"
            },
            {
              "id": "455988",
              "name": "Shakeel Badayuni",
              "role": "lyricist",
              "image": "http://c.saavncdn.com/811/Do-Badan-1966-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/shakeel-badayuni/V8-vwoYjLJQ_"
            }
          ]
        },
        "release_date": "1960-01-01",
        "label_url": "/label/saregama-albums/MNccah3udrQ_",
        "vcode": "010910080272051",
        "vlink": "https://jiotunepreview.jio.com/content/Converted/010910080281609.mp3",
        "triller_available": false
      }
    },
    {
      "id": "70WeKvM8",
      "title": "Baharo Phool Barsao",
      "subtitle": "Mohammed Rafi - Suraj",
      "header_desc": "Track from Mohammed Rafi from album Suraj.",
      "type": "song",
      "perma_url": "https://www.jiosaavn.com/song/baharo-phool-barsao/R1g8VD9Gegs",
      "image": "https://c.saavncdn.com/888/Suraj-Hindi-1966-150x150.jpg",
      "language": "hindi",
      "year": "1966",
      "play_count": "7284779",
      "explicit_content": "0",
      "list_count": "0",
      "list_type": "",
      "list": "",
      "more_info": {
        "music": "Shankar-Jaikishan",
        "album_id": "1050519",
        "album": "Suraj",
        "label": "Saregama",
        "origin": "playlist",
        "is_dolby_content": false,
        "320kbps": "true",
        "encrypted_media_url": "ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDy+WQfthv+UKDIY/qM6/D+U2rvOuALWjD5dtPm1X1VPPG8Z4WZb6DGDhw7tS9a8Gtq",
        "encrypted_cache_url": "",
        "album_url": "https://www.jiosaavn.com/album/suraj/oK,eNnVI8z8_",
        "duration": "267",
        "rights": {
          "code": "0",
          "cacheable": "true",
          "delete_cached_object": "false",
          "reason": ""
        },
        "cache_state": "",
        "has_lyrics": "true",
        "lyrics_snippet": "mera mehboob aayaa hai mera mehboob aayaa hai",
        "starred": "false",
        "copyright_text": "©  1966 Saregama",
        "artistMap": {
          "primary_artists": [
            {
              "id": "505312",
              "name": "Mohammed Rafi",
              "role": "primary_artists",
              "image": "http://c.saavncdn.com/artists/Mohammed_Rafi_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mohammed-rafi/UY8fLYUk,Uo_"
            }
          ],
          "featured_artists": [],
          "artists": [
            {
              "id": "456076",
              "name": "Shankar-Jaikishan",
              "role": "music",
              "image": "http://c.saavncdn.com/artists/Shankar-Jaikishan_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/shankar-jaikishan/thhJCowfY4U_"
            },
            {
              "id": "505312",
              "name": "Mohammed Rafi",
              "role": "singer",
              "image": "http://c.saavncdn.com/artists/Mohammed_Rafi_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mohammed-rafi/UY8fLYUk,Uo_"
            },
            {
              "id": "456077",
              "name": "Hasrat Jaipuri",
              "role": "lyricist",
              "image": "http://c.saavncdn.com/413/An-Evening-In-Paris-1967-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/hasrat-jaipuri/eeiwe2-9NT0_"
            },
            {
              "id": "458150",
              "name": "Vyjayanthimala",
              "role": "starring",
              "image": "http://c.saavncdn.com/artists/Vyjayanthimala_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/vyjayanthimala/uXh2k-Ps5CA_"
            },
            {
              "id": "456871",
              "name": "Rajendra Kumar",
              "role": "starring",
              "image": "http://c.saavncdn.com/634/Khodal-Tamari-Mer-Gujarati-2018-20190121211709-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/rajendra-kumar/JUaMZe3RGlg_"
            },
            {
              "id": "705905",
              "name": "Ajeet",
              "role": "starring",
              "image": "http://c.saavncdn.com/685/Mulakaat-Sajna-English-2019-20190624054707-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/ajeet/BV,TaQo30Jg_"
            },
            {
              "id": "457893",
              "name": "Johnny Walker",
              "role": "starring",
              "image": "http://c.saavncdn.com/774/Yellow-Diamonds-feat-Leeno-Phashion-Luk-Lue--English-2017-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/johnny-walker/oEfML4HSOxE_"
            },
            {
              "id": "456617",
              "name": "Mumtaz",
              "role": "starring",
              "image": "http://c.saavncdn.com/artists/Mumtaz_150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mumtaz/kL113UtKCv8_"
            },
            {
              "id": "456424",
              "name": "Lalita Pawar",
              "role": "starring",
              "image": "http://c.saavncdn.com/151/Anand-Hindi-1970-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/lalita-pawar/xeiOTGPZQk8_"
            },
            {
              "id": "456602",
              "name": "Agha",
              "role": "starring",
              "image": "http://c.saavncdn.com/443/No-Le-Copia-A-Nadie-Spanish-2014-20170928214119-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/agha/H-C3C8gau7M_"
            },
            {
              "id": "456428",
              "name": "Mukri",
              "role": "starring",
              "image": "http://c.saavncdn.com/486/Upaasna-Hindi-1971-20190531154731-150x150.jpg",
              "type": "artist",
              "perma_url": "https://www.jiosaavn.com/artist/mukri/Nik6cf0LMPw_"
            }
          ]
        },
        "release_date": "1966-03-25",
        "label_url": "/label/saregama-albums/MNccah3udrQ_",
        "vcode": "010910080030346",
        "vlink": "https://jiotunepreview.jio.com/content/Converted/010910080036091.mp3",
        "triller_available": false,
        "lyrics_id": ""
      }
    }
  ];

let index=-1;

let song_status,seeker;

function initialize(){
    song_status=document.getElementById('toggleplay');
    seeker=document.getElementById('seeker');
}



audio.onpause=()=>{
    initialize();
    // songimg.style="animation-play-state:paused"
    song_status.className='fa fa-play';
}

audio.ontimeupdate=()=>{
    initialize();
    localStorage.setItem('currentTime',audio.currentTime);
    
}

audio.onplay=()=>{
    //when song start playing add the meta data
    initialize();
    MediaSessionApi();
    if(song_status){
      song_status.className='fa fa-pause';
    }
    
    
  
    
}


if ('mediaSession' in window.navigator){
   
  
    window.navigator.mediaSession.setActionHandler('play', function() { togglePlay();});
    window.navigator.mediaSession.setActionHandler('pause', function() { togglePlay();});
   
    // window.navigator.mediaSession.setActionHandler('previoustrack', function() { playprev(); });
    // window.navigator.mediaSession.setActionHandler('nexttrack', function() { playnext();});
    
  }
function MediaSessionApi(){
    const song=JSON.parse(localStorage.getItem('current'));
    navigator.mediaSession.metadata = new window.MediaMetadata({
        title:song.title,
        artist: song.description,
        //album: 'The Ultimate Collection (Remastered)',
        artwork: [
         
          { src: song.image, sizes: '512x512', type: 'image/png' },
        ]
      });
}



async function PlaySong(data,setloading){
     
    setloading(true);
     const cur_song={
      id:data.id,
      title:data.title,
      description:data.description || data.subtitle,
      image:data.image.replace('150x150','500x500').replace('50x50','500x500'),
      //url:d.url
     }

  localStorage.setItem('current',JSON.stringify(cur_song));
  const d=await GetSongURL(data.id);
    

  let song=JSON.parse(localStorage.getItem('current'));
  song.url=d.url;
  localStorage.setItem('current',JSON.stringify(song));

  audio.src=d.url;
  audio.play();
  setloading(false);

  if(index>=songs.length-1){

    let d= await GetSongs();
    songs=d.data;
    index=-1;
  }
    

}

function togglePlay(){
    if(audio.paused)
    {
        audio.play();
    }
    else{
        audio.pause();
    }
}

async function Playnext(setloading){
    
    if(index+1>=songs.length){
        setloading(false);
        return;
    }
    else{
      index++;
      await PlaySong(songs[index],setloading);
    }
    
}

async function Playprev(setloading){
    if(index<=0){
        setloading(false);
        return;

    }
    index--;
    await PlaySong(songs[index],setloading);
}




async function PlayAlbum(data,setloading){

  songs=data;
  index=-1
  await Playnext(setloading);
   
}




export{
    togglePlay,
    PlaySong,
    Playnext,
    Playprev,
    PlayAlbum

}