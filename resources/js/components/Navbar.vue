<template>
    <header class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 bg-orange">
        <div class="flex items-center justify-between px-4 py-3 sm:p-0">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="24" height="24" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor"
                          d="M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12C21,11.5 20.96,11 20.87,10.5C20.6,10 20,10 20,10H18V9C18,8 17,8 17,8H15V7C15,6 14,6 14,6H13V4C13,3 12,3 12,3M9.5,6A1.5,1.5 0 0,1 11,7.5A1.5,1.5 0 0,1 9.5,9A1.5,1.5 0 0,1 8,7.5A1.5,1.5 0 0,1 9.5,6M6.5,10A1.5,1.5 0 0,1 8,11.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 5,11.5A1.5,1.5 0 0,1 6.5,10M11.5,11A1.5,1.5 0 0,1 13,12.5A1.5,1.5 0 0,1 11.5,14A1.5,1.5 0 0,1 10,12.5A1.5,1.5 0 0,1 11.5,11M16.5,13A1.5,1.5 0 0,1 18,14.5A1.5,1.5 0 0,1 16.5,16H16.5A1.5,1.5 0 0,1 15,14.5H15A1.5,1.5 0 0,1 16.5,13M11,16A1.5,1.5 0 0,1 12.5,17.5A1.5,1.5 0 0,1 11,19A1.5,1.5 0 0,1 9.5,17.5A1.5,1.5 0 0,1 11,16Z"/>
                </svg>
                <span class="font-semibold text-xl tracking-tight">Cookies Shop</span>
            </div>
            <div class="sm:hidden">
                <button @click="isOpen = !isOpen" type="button" class="block hover:text-white hover:border-white focus:text-white focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0 bg-orange">
            <a href="/cookies" class="block px-2 py-1 text-white rounded hover:bg-red-40 ">Cookies</a>
<!--            <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:text-white hover:border-white sm:mt-0 sm:ml-2">Trips</a>-->
<!--            <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:text-white hover:border-white sm:mt-0 sm:ml-2">Messages</a>-->
        </nav>
    </header>
</template>


<script>
    export default {
        data() {
            return {
                isOpen: false,
            }
        }
    }
</script>
