<template>
  <div class="w-full pt-20">
    <form>
      <div class="flex flex-col gap-6">
        <div class="flex gap-10">
          <div class="relative z-0 w-full mb-4 group">
            <input
              type="text"
              name="name"
              id="name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
              placeholder=" "
              required
            />
            <label
              for="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >First name</label
            >
          </div>
          <div class="relative z-0 w-full mb-4 group">
            <input
              type="email"
              name="email"
              id="email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
              placeholder=" "
              required
            />
            <label
              for="email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Email address</label
            >
          </div>
        </div>
        <div class="relative z-0 w-full mb-4 group">
          <input
            type="text"
            name="company"
            id="company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required
          />
          <label
            for="company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Company (Optional)</label
          >
        </div>
        <select
          class="w-full py-2.5 block text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          placeholder="Select an option"
        >
          <option disabled selected class="bg-background-primary">
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
            type="text"
            name="message"
            id="message"
            class="block h-32 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required
          ></textarea>
          <label
            for="message"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Message</label
          >
        </div>
        <div class="flex">
          <button
            type="submit"
            class="basis-1/3 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const options = ["Enquiries", "Suggestions", "Others"];
</script>

<style scoped></style>
