import { App } from 'vue'
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";

export default (app: App<Element>) => {
	app.component('MyButton', MyButton)
	app.component('MyInput', MyInput)
	app.component('MyDialog', MyDialog)
	app.component('MySelect', MySelect)
}