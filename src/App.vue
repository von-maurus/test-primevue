<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<!-- <TableTest /> -->
		<div style="margin: 20px">
			<TableTree />
		</div>
		<div style="margin: 20px">
			<TableTreeGroup />
		</div>
		<div style="margin: 20px">
			Componente de PRIME 3
			<!-- <TreeSelect
				v-model="selectedNodeKey"
				:options="nodes"
				placeholder="Select Item"
			/> -->
			<CascadeSelect
				v-model="selectedCity"
				:options="countries"
				optionLabel="cname"
				optionGroupLabel="name"
				:optionGroupChildren="['states', 'cities']"
				style="minwidth: 14rem"
			/>
		</div>
		<div>
			<h3>Basic</h3>
			<Tree :value="nodes"></Tree>
			<h3>Programmatic Control</h3>
			<div style="margin-bottom: 1em">
				<Button type="button" icon="pi pi-plus" label="Expand All" />
				<Button type="button" icon="pi pi-minus" label="Collapse All" />
			</div>
			<Tree :value="nodes"></Tree>
		</div>
		<div style="margin: 20px">
			<div style="display: flex; flex-flow: row nowrap">
				<MultiSelect
					v-model="selectedCars"
					:options="cars"
					optionLabel="brand"
					placeholder="Select Brands"
				/>
				<SelectButton
					v-model="selectedCity"
					:options="cities"
					optionLabel="name"
				/>
			</div>
			<PickListComponent />
		</div>
	</div>
</template>

<script>
// import TableTest from './components/TableTest.vue';
import TableTree from './components/TableTree.vue';
import TableTreeGroup from './components/TableTreeGroup.vue';
import PickListComponent from './components/PickListComponent.vue';
import MultiSelect from 'primevue/multiselect';
import SelectButton from 'primevue/selectbutton';
import Tree from 'primevue/tree';
import CascadeSelect from 'primevue/cascadeselect';

// import TreeSelect from 'primevue/treeselect';

export default {
	name: 'App',
	components: {
		// TableTest,
		TableTree,
		TableTreeGroup,
		PickListComponent,
		MultiSelect,
		SelectButton,
		Tree,
		CascadeSelect,
		// TreeSelect,
	},
	data() {
		return {
			selectedCars: null,
			selectedCity: null,
			countries: [
				{
					name: 'Australia',
					code: 'AU',
					states: [
						{
							name: 'New South Wales',
							cities: [
								{ cname: 'Sydney', code: 'A-SY' },
								{ cname: 'Newcastle', code: 'A-NE' },
								{ cname: 'Wollongong', code: 'A-WO' },
							],
						},
						{
							name: 'Queensland',
							cities: [
								{ cname: 'Brisbane', code: 'A-BR' },
								{ cname: 'Townsville', code: 'A-TO' },
							],
						},
					],
				},
				{
					name: 'Canada',
					code: 'CA',
					states: [
						{
							name: 'Quebec',
							cities: [
								{ cname: 'Montreal', code: 'C-MO' },
								{ cname: 'Quebec City', code: 'C-QU' },
							],
						},
						{
							name: 'Ontario',
							cities: [
								{ cname: 'Ottawa', code: 'C-OT' },
								{ cname: 'Toronto', code: 'C-TO' },
							],
						},
					],
				},
				{
					name: 'United States',
					code: 'US',
					states: [
						{
							name: 'California',
							cities: [
								{ cname: 'Los Angeles', code: 'US-LA' },
								{ cname: 'San Diego', code: 'US-SD' },
								{ cname: 'San Francisco', code: 'US-SF' },
							],
						},
						{
							name: 'Florida',
							cities: [
								{ cname: 'Jacksonville', code: 'US-JA' },
								{ cname: 'Miami', code: 'US-MI' },
								{ cname: 'Tampa', code: 'US-TA' },
								{ cname: 'Orlando', code: 'US-OR' },
							],
						},
						{
							name: 'Texas',
							cities: [
								{ cname: 'Austin', code: 'US-AU' },
								{ cname: 'Dallas', code: 'US-DA' },
								{ cname: 'Houston', code: 'US-HO' },
							],
						},
					],
				},
			],
			nodes: [
				{
					key: '0',
					label: 'Documents',
					data: 'Documents Folder',
					icon: 'pi pi-fw pi-inbox',
					children: [
						{
							key: '0-0',
							label: 'Work',
							data: 'Work Folder',
							icon: 'pi pi-fw pi-cog',
							children: [
								{
									key: '0-0-0',
									label: 'Expenses.doc',
									icon: 'pi pi-fw pi-file',
									data: 'Expenses Document',
								},
								{
									key: '0-0-1',
									label: 'Resume.doc',
									icon: 'pi pi-fw pi-file',
									data: 'Resume Document',
								},
							],
						},
						{
							key: '0-1',
							label: 'Home',
							data: 'Home Folder',
							icon: 'pi pi-fw pi-home',
							children: [
								{
									key: '0-1-0',
									label: 'Invoices.txt',
									icon: 'pi pi-fw pi-file',
									data: 'Invoices for this month',
								},
							],
						},
					],
				},
				{
					key: '1',
					label: 'Events',
					data: 'Events Folder',
					icon: 'pi pi-fw pi-calendar',
					children: [
						{
							key: '1-0',
							label: 'Meeting',
							icon: 'pi pi-fw pi-calendar-plus',
							data: 'Meeting',
						},
						{
							key: '1-1',
							label: 'Product Launch',
							icon: 'pi pi-fw pi-calendar-plus',
							data: 'Product Launch',
						},
						{
							key: '1-2',
							label: 'Report Review',
							icon: 'pi pi-fw pi-calendar-plus',
							data: 'Report Review',
						},
					],
				},
				{
					key: '2',
					label: 'Movies',
					data: 'Movies Folder',
					icon: 'pi pi-fw pi-star-fill',
					children: [
						{
							key: '2-0',
							icon: 'pi pi-fw pi-star-fill',
							label: 'Al Pacino',
							data: 'Pacino Movies',
							children: [
								{
									key: '2-0-0',
									label: 'Scarface',
									icon: 'pi pi-fw pi-video',
									data: 'Scarface Movie',
								},
								{
									key: '2-0-1',
									label: 'Serpico',
									icon: 'pi pi-fw pi-video',
									data: 'Serpico Movie',
								},
							],
						},
						{
							key: '2-1',
							label: 'Robert De Niro',
							icon: 'pi pi-fw pi-star-fill',
							data: 'De Niro Movies',
							children: [
								{
									key: '2-1-0',
									label: 'Goodfellas',
									icon: 'pi pi-fw pi-video',
									data: 'Goodfellas Movie',
								},
								{
									key: '2-1-1',
									label: 'Untouchables',
									icon: 'pi pi-fw pi-video',
									data: 'Untouchables Movie',
								},
							],
						},
					],
				},
			],
			selectedNodeKey: null,
			cars: [
				{ brand: 'Audi', value: 'Audi' },
				{ brand: 'BMW', value: 'BMW' },
				{ brand: 'Fiat', value: 'Fiat' },
				{ brand: 'Honda', value: 'Honda' },
				{ brand: 'Jaguar', value: 'Jaguar' },
				{ brand: 'Mercedes', value: 'Mercedes' },
				{ brand: 'Renault', value: 'Renault' },
				{ brand: 'Volkswagen', value: 'Volkswagen' },
				{ brand: 'Volvo', value: 'Volvo' },
			],
			// selectedCity: null,
			cities: [
				{ name: 'London', code: 'LND' },
				{ name: 'Paris', code: 'PRS' },
				{ name: 'Rome', code: 'RM' },
			],
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
