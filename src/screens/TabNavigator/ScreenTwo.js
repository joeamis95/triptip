import React from 'react';
import { View, Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class GooglePlaces extends React.Component {

  dataDisplay(){
    
  }

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={1} // minimum length of text to search
        autoFocus={false}
        returnKeyType="search" // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails = {true}
        renderDescription={row => row.description || row.vicinity} // custom description render
        onPress={(data, details = null) => dataDisplay(console.log(data, details))}

        getDefaultValue={() => ''}

        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyAvBO-DYC6fLeYitY3XkXpdHAT4mcD259U',
          language: 'en', // language of the results
          types: ['geocode'], // default: 'geocode'
        }}

        styles={{
          textInputContainer: {
            width: '100%',
          },
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}

        currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          types: 'food',
        }}

        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

        debounce={200}
      />
    );
  }
}
