<template>
  <div style="display: flex; flex-direction: column; gap: 10%">
    <AutoComplete
      v-model="selectedCountry"
      :suggestions="filteredCountries"
      @complete="searchCountry()"
      field="name"
    />
    <Calendar v-model="value" :inline="true" />
    <CascadeSelect
      v-model="selectedCity"
      :options="countriesB"
      optionLabel="cname"
      optionGroupLabel="name"
      :optionGroupChildren="['states', 'cities']"
      style="minwidth: 14rem"
    />
    <div>
      <Checkbox inputId="binary" v-model="checked" :binary="true" />
      <label for="binary">{{ checked }}</label>
    </div>

    <Chips v-model="value1" />

    <ColorPicker v-model="color1" />

    <Dropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Select a City"
    />

    <!-- <Editor v-model="value2" editorStyle="height: 320px" /> SE NECESITA OTRA DEPENDENCIA -->

    <InputMask v-model="value3" mask="99-999999" />
    <InputNumber v-model="value4" />
    <InputSwitch v-model="checked" />
    <InputText type="text" v-model="value5" />

    <Knob v-model="value6" />

    <Listbox v-model="selectedCity" :options="cities" optionLabel="name" />

    <Password v-model="password" />

    <RadioButton inputId="city1" name="city" value="Chicago" v-model="city" />
    <RadioButton
      inputId="city2"
      name="city"
      value="Los Angeles"
      v-model="city"
    />

    <Rating v-model="value6" :stars="10" />

    <Slider v-model="value6" />

    <Textarea v-model="value2" rows="5" cols="30" />

    <ToggleButton v-model="checked" />

    <TriStateCheckbox v-model="value1" />

    <Button label="Submit" icon="pi pi-check" iconPos="right" />

    <SpeedDial :model="items" />

    <SplitButton label="Danger" :model="items" class="p-button-danger p-button-rounded"></SplitButton>


  </div>
</template>

<script>
import AutoComplete from "primevue/autocomplete";
import Calendar from "primevue/calendar";
import CascadeSelect from "primevue/cascadeselect";
import Checkbox from "primevue/checkbox";
import Chips from "primevue/chips";
import ColorPicker from "primevue/colorpicker";
import Dropdown from "primevue/dropdown";
// import Editor from "primevue/editor";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Knob from "primevue/knob";
import Listbox from "primevue/listbox";
import Password from "primevue/password";
import RadioButton from "primevue/radiobutton";
import Rating from "primevue/rating";
import Slider from 'primevue/slider';
import Textarea from "primevue/textarea";
import ToggleButton from 'primevue/togglebutton';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import Button from 'primevue/button';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';

export default {
  name: "FormComponent",
  components: {
    AutoComplete,
    Calendar,
    CascadeSelect,
    Checkbox,
    Chips,
    ColorPicker,
    Dropdown,
    // Editor,
    InputMask,
    InputNumber,
    InputSwitch,
    InputText,
    Knob,
    Listbox,
    Password,
    RadioButton,
    Rating,
    Slider,
    Textarea,
    ToggleButton,
    TriStateCheckbox,
    Button,
    SpeedDial,
    SplitButton,
  },
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: 0,
      password: null,
      color1: null,
      selectedCountry: null,
      selectedCity: null,
      filteredCountries: null,
      checked: false,
      city: "Chicago",
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      countries: [
        { name: "Afghanistan", code: "AF" },
        { name: "Åland Islands", code: "AX" },
        { name: "Albania", code: "AL" },
        { name: "Algeria", code: "DZ" },
        { name: "American Samoa", code: "AS" },
        { name: "Andorra", code: "AD" },
        { name: "Angola", code: "AO" },
        { name: "Anguilla", code: "AI" },
        { name: "Antarctica", code: "AQ" },
        { name: "Antigua and Barbuda", code: "AG" },
        { name: "Argentina", code: "AR" },
        { name: "Armenia", code: "AM" },
        { name: "Aruba", code: "AW" },
        { name: "Australia", code: "AU" },
        { name: "Austria", code: "AT" },
        { name: "Azerbaijan", code: "AZ" },
        { name: "Bahamas", code: "BS" },
        { name: "Bahrain", code: "BH" },
        { name: "Bangladesh", code: "BD" },
        { name: "Barbados", code: "BB" },
        { name: "Belarus", code: "BY" },
        { name: "Belgium", code: "BE" },
        { name: "Belize", code: "BZ" },
        { name: "Benin", code: "BJ" },
        { name: "Bermuda", code: "BM" },
      ],
      countriesB: [
        {
          name: "Australia",
          code: "AU",
          states: [
            {
              name: "New South Wales",
              cities: [
                { cname: "Sydney", code: "A-SY" },
                { cname: "Newcastle", code: "A-NE" },
                { cname: "Wollongong", code: "A-WO" },
              ],
            },
            {
              name: "Queensland",
              cities: [
                { cname: "Brisbane", code: "A-BR" },
                { cname: "Townsville", code: "A-TO" },
              ],
            },
          ],
        },
        {
          name: "Canada",
          code: "CA",
          states: [
            {
              name: "Quebec",
              cities: [
                { cname: "Montreal", code: "C-MO" },
                { cname: "Quebec City", code: "C-QU" },
              ],
            },
            {
              name: "Ontario",
              cities: [
                { cname: "Ottawa", code: "C-OT" },
                { cname: "Toronto", code: "C-TO" },
              ],
            },
          ],
        },
        {
          name: "United States",
          code: "US",
          states: [
            {
              name: "California",
              cities: [
                { cname: "Los Angeles", code: "US-LA" },
                { cname: "San Diego", code: "US-SD" },
                { cname: "San Francisco", code: "US-SF" },
              ],
            },
            {
              name: "Florida",
              cities: [
                { cname: "Jacksonville", code: "US-JA" },
                { cname: "Miami", code: "US-MI" },
                { cname: "Tampa", code: "US-TA" },
                { cname: "Orlando", code: "US-OR" },
              ],
            },
            {
              name: "Texas",
              cities: [
                { cname: "Austin", code: "US-AU" },
                { cname: "Dallas", code: "US-DA" },
                { cname: "Houston", code: "US-HO" },
              ],
            },
          ],
        },
      ],
      items: [
    {
        label: 'Add',
        icon: 'pi pi-pencil',
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
    }
]
    };
  },
  methods: {
    searchCountry() {
      this.filteredCountries = this.countries.filter((a) => a.name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
