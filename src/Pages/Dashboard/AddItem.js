import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddItem = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: items, isLoading } = useQuery('items', () => fetch(`https://auto-parts-m2h1.onrender.com/item`).then(res => res.json()));
    const imgStorageKey = '852f1ded9ccf96152fa8763828b39cff'

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const item = {
                        name: data.name,
                        price: data.price,
                        quantity: data.quantity,
                        description: data.description,
                        icon: img
                    }
                    fetch('https://auto-parts-m2h1.onrender.com/item', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(item)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Item Added to List Successfully');
                                reset();
                            }
                            else {
                                toast.error("Sorry! Failed to Add Item")
                            }
                        })
                }
                console.log('imgbb', result)
            })

    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='hero min-h-screen'>            
            <div className='card flex justify-center  items-center p-10 '>
            <h2 className='text-3xl font-semibold text-primary text-center mb-2'>Add Item here</h2>
                <form onSubmit={handleSubmit(onSubmit)} class="card-body rounded-lg shadow-2xl border-2  ">
                    <div class="form-control">

                        <input type="text" placeholder="Item Name" class="input input-bordered" {...register("name", {
                            required: {
                                value: true,
                                message: 'Name Required'
                            },
                        })} />
                        <label class="label">
                            {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                        </label>
                    </div>
                    <div class="form-control">

                        <input type="number" placeholder="Price" class="input input-bordered" {...register("price", {
                            required: {
                                value: true,
                                message: 'Price Required'
                            },
                        })} />
                        <label class="label">
                            {errors.price?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.price.message}</span>}
                        </label>
                    </div>

                    <div class="form-control">
                        <input type="number" placeholder="Quantity" class="input input-bordered"  {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Quantity Required'
                            },
                        })} />
                        <label class="label">
                            {errors.quantity?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.quantity.message}</span>}
                        </label>
                    </div>

                    <div class="form-control">
                        <input type="file" class="input input-bordered"  {...register("image", {
                            required: {
                                value: true,
                                message: 'Image Required'
                            },
                        })} />
                        <label class="label">
                            {errors.image?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.image.message}</span>}
                        </label>
                    </div>

                    <div class="form-control">
                        <textarea type="text" placeholder="Description" class="input input-bordered"  {...register("description", {
                            required: {
                                value: true,
                                message: 'Description Required'
                            },
                        })} />

                        <label class="label">
                            {errors.description?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.description.message}</span>}
                        </label>
                    </div>

                    <div class="form-control ">
                        <input className='btn btn-primary w-full hover:btn-info font-bold  max-w-sm text-white' value="Add" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;