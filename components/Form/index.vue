<template>
  <div class="w-full pt-20">
    <form @submit.prevent="handle_send">
      <div class="flex flex-col gap-6">
        <div class="flex gap-10">
          <div class="relative z-0 w-full mb-4 group">
            <input
              v-model="formData.name"
              type="text"
              name="name"
              id="name"
              class="block py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
              placeholder=" "
              required
            />
            <label
              for="name"
              class="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Full Name</label
            >
          </div>
          <div class="relative z-0 w-full mb-4 group">
            <input
              v-model="formData.email"
              type="email"
              name="email"
              id="email"
              class="block py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
              placeholder=" "
              required
            />
            <label
              for="email"
              class="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Email Address</label
            >
          </div>
        </div>
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="formData.company"
            type="text"
            name="company"
            id="company"
            class="block py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
          />
          <label
            for="company"
            class="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Company (Optional)</label
          >
        </div>
        <select
          v-model="formData.type"
          class="w-full py-2.5 mb-4 block text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          placeholder=" "
        >
          <option value="" disabled selected class="bg-background-primary">
            Select an Option
          </option>

          <option
            :value="item"
            class="text-text-primary bg-background-primary"
            v-for="item in options"
          >
            {{ item }}
          </option>
        </select>

        <div class="relative z-0 w-full mb-4 group">
          <textarea
            v-model="formData.message"
            type="text"
            name="message"
            id="message"
            class="block h-32 py-2.5 px-0 w-full text-sm text-text-primary bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required
            >{{ formData.message }}</textarea
          >
          <label
            for="message"
            class="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Message</label
          >
        </div>
        <div class="flex">
          <button
            type="submit"
            class="basis-1/3 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 flex items-center justify-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            <span v-if="sent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
            <span v-else>{{ loading ? "Loading..." : "Submit" }}</span>
          </button>
        </div>
        <FormError
          message="An Error Occured. Please Try Again"
          v-if="displayError"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const mail = useMail();

const { email } = useRuntimeConfig().public;

const options = ["Enquiries", "Suggestions", "Others"];

const loading = ref(false);

const sent = ref(false);

const displayError = ref(false);

const formData = reactive({
  name: "",
  email: "",
  company: "",
  type: "",
  message: "",
});

const handle_send = async () => {
  displayError.value = false;
  loading.value = true;
  try {
    await mail.send({
      from: `<${email}> ${formData.name}`,
      sender: `${formData.email}`,
      replyTo: `${formData.email}`,
      subject: `${formData.type} | ${formData.company || "Individual"}`,
      text: formData.message,
    });

    sent.value = true;

    setTimeout(() => {
      sent.value = false;
    }, 5000);
  } catch {
    displayError.value = true;
  } finally {
    loading.value = false;
  }
};
</script>
