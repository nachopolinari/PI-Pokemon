import { useState } from "react";

const Form = () => {

    const [form, setForm] = useState({
        name: "",
        img: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        type: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        img: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        type: ""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [property]: value })
        validate({ ...form, [property]: value } /*para remplazar este truco podria poner el validate dentro de un useEffect que mire la actualizacion del estado */)
    }

    const validate = (form) => {
        const newErrors = {
            name: '',
            img: '',
            life: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            type: ''
        };
        //------valida name-----------
        if (!/^.{3,10}$/.test(form.name)) {
            newErrors.name = 'Cannot be empty and must have between 3 and 10 characters.';
        } else if (!/^[A-Za-z]+$/.test(form.name)) {
            newErrors.name = 'Cannot contain numbers or special characters.';
        } else { newErrors.name = '' }
        //-------valida img-----------
        if (!/^.{1,25}$/.test(form.img)) {
            newErrors.img = 'Cannot be empty.';
        } else if (!/^(https?:\/\/)?([\w\d]+\.)?[\w\d]+\.\w{2,}(\/.*)?$/.test(form.img)) {
            newErrors.img = 'Please enter a valid URL.';

        } else { newErrors.img = '' }
        //---------valida life-----------
        if (!/^.+$/.test(form.life)) {
            newErrors.life = 'Cannot be empty.';
        } else if (!Number(form.life) || form.life < 1 || form.life > 250) {
            newErrors.life = 'Must contain a number between 1 and 250.';
        } else { newErrors.life = '' }
        //----------------valida attack------------
        if (!/^.+$/.test(form.attack)) {
            newErrors.attack = 'Cannot be empty.';
        } else if (!Number(form.attack) || form.attack < 10 || form.attack > 190) {
            newErrors.attack = 'Must contain a number between 10 and 190.';
        } else { newErrors.attack = '' }
        //----------valida defense---------
        if (!/^.+$/.test(form.defense)) {
            newErrors.defense = 'Cannot be empty.';
        } else if (!Number(form.defense) || form.defense < 10 || form.defense > 190) {
            newErrors.defense = 'Must contain a number between 10 and 190.';
        } else { newErrors.defense = '' }
        //---------------valida speed-----------
        if (!/^.+$/.test(form.speed)) {
            newErrors.speed = 'Cannot be empty.';
        } else if (!Number(form.speed) || form.speed < 10 || form.speed > 190) {
            newErrors.speed = 'Must contain a number between 10 and 190.';
        } else { newErrors.speed = '' }
        //----valida height-------------
        if (!/^.+$/.test(form.height)) {
            newErrors.height = 'Cannot be empty.';
        } else if (!Number(form.height) || form.height < 10 || form.height > 190) {
            newErrors.height = 'Must contain a number between 10 and 190.';
        } else { newErrors.height = '' }
        //---------------valida weight--------------
        if (!/^.+$/.test(form.weight)) {
            newErrors.weight = 'Cannot be empty.';
        } else if (!Number(form.weight) || form.weight < 100 || form.weight > 1000) {
            newErrors.weight = 'Must contain a number between 100 and 1000.';
        } else { newErrors.weight = '' }
        //-----valida type

        setErrors(newErrors);
    };

    const sumbitHandler = (event) => {
        event.preventDefault()
    };

    return (
        <form onSubmit={sumbitHandler}>
            <h1>Crea tu propio Pokemon!!</h1>
            <div>
                <label htmlFor="">Name: </label>
                <input type="text" name="name" value={form.name} onChange={changeHandler} placeholder=''/>
                <span>{errors.name}</span>
            </div>
            <br /> {/*Cambiar esto por CSS */}
            <div>
                <label htmlFor="">Image: </label>
                <input type="text" name="img" value={form.img} onChange={changeHandler} placeholder='https://pokemon-image.com'/>
                <span>{errors.img}</span>
            </div>
            <br /> {/*Cambiar esto por CSS */}
            <div>
                <label htmlFor="">Life: </label>
                <input type="text" name="life" value={form.life} onChange={changeHandler} placeholder='1-250'/>
                <span>{errors.life}</span>
            </div>
            <br /> {/*Cambiar esto por CSS */}
            <div>
                <label htmlFor="">Attack: </label>
                <input type="text" name="attack" value={form.attack} onChange={changeHandler} placeholder='10-190'/>
                <span>{errors.attack}</span>
            </div>
            <br /> {/*Cambiar esto por CSS */}
            <div>
                <label htmlFor="">Defense: </label>
                <input type="text" name="defense" value={form.defense} onChange={changeHandler} placeholder='10-190'/>
                <span>{errors.defense}</span>
            </div>
            <br /> {/*Cambiar esto por CSS */}
            <div>
                <label htmlFor="">Speed: </label>
                <input type="text" name="speed" value={form.speed} onChange={changeHandler} placeholder='10-190'/>
                <span>{errors.speed}</span>
            </div>
            <br /> {/*Cambiar esto por CSS */}
            <div>
                <label htmlFor="">Height: </label>
                <input type="text" name="height" value={form.height} onChange={changeHandler} placeholder='10-190'/>
                <span>{errors.height}</span>
            </div>
            <br /> {/*Cambiar esto por CSS */}
            <div>
                <label htmlFor="">Weight: </label>
                <input type="text" name="weight" value={form.weight} onChange={changeHandler} placeholder='100-1000'/>
                <span>{errors.weight}</span>
            </div>
            <br /> {/*Cambiar esto por CSS */}
            <h4>Elige al menos dos tipos de Pokémon:</h4>
            <div>
                <label><input type="checkbox" name="pokemonType" value="Fuego" /> Fuego</label>
                <br />
                <label><input type="checkbox" name="pokemonType" value="Agua" /> Agua</label>
                <br />
                <label><input type="checkbox" name="pokemonType" value="Planta" /> Planta</label>
                <br />
                <label><input type="checkbox" name="pokemonType" value="Eléctrico" /> Eléctrico</label>
                <br />
            </div>
            <div>
                <input type="reset" />
                <input type="submit" value='Enviar' />
            </div>
        </form>
    )
};
export default Form;