app.component('order-form', 
{
    props:{
        cart: {
            type: Array,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
  
        template :
        
            /*html*/
            `<div id="modal">
                <div class="backdrop" @click="hideOrderForm"></div>
                    <div class="modalBody">
                        <div class="formContainer" id="orderForm" @submit.prevent="onSubmit">
                            <h1>Complete the form below and hit submit</h1>
                            <form class="orderForm">
                            <ul>
                                <li>
                                <input
                                    type="text"
                                    class="fieldStyle fieldSplit alignLeft"
                                    placeholder="Name"
                                    v-model= 'name'
                                />
                                <input
                                    type="text"
                                    class="fieldStyle fieldSplit alignRight"
                                    placeholder="Phone no."
                                    v-model= 'phone'
                                />
                                </li>
                                <input
                                    type="hidden"  v-model.number= 'total' class="fieldStyle fieldSplit alignRight"
                                />
                               
                                <li>
                                <textarea
                                    class="fieldStyle"
                                    placeholder="Address"
                                    v-model= 'address'
                                ></textarea>
                                </li>
                                <li>
                                <input type="submit" value="Submit" />
                                </li>
                            </ul>
                            </form>
                        </div>
                    </div>
                </div>`,
                data() {
                    return {
                        name: "",
                        phone: "",
                        address: ""
                    }
                },
                methods: {
                    hideOrderForm(){
                        this.$emit("toggle-modal")
                    },
                    onSubmit(){
                        let orderDetails= {
                            name: this.name,
                            phone: this.phone,
                            address: this.address,
                            total: this.total
                        }
                        console.log(orderDetails);
                        this.hideOrderForm();
                        this.$emit('clear-cart');
                        
                    }
                }
               
    
});