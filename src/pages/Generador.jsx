import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Generador() {
  const generatePassword = (length = 12, letras = true, numeros = true, caracteres_especiales = true) => {
    const letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const specialchar = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let charset = '';

    if (letras) {
      charset += letter;
    }

    if (numeros) {
      charset += number;
    }

    if (caracteres_especiales) {
      charset += specialchar;
    }

    if (!charset.length) {
      // conjunto predeterminado en caso de no ser seleccionado ningún checkbox
      charset = letter + number + specialchar;
    }

    let password = '';
    for (let i = 0; i < length; ++i) {
      const index = Math.floor(Math.random() * charset.length);
      password += charset[index];
    }

    return password;
  };

  const measureSecurity = (password) => {
    // Puedes personalizar la lógica para evaluar la seguridad aquí
    const lengthScore = password.length >= 12 ? 2 : 1;
    const lettersScore = /[a-zA-Z]/.test(password) ? 2 : 0;
    const numbersScore = /\d/.test(password) ? 2 : 0;
    const specialCharsScore = /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password) ? 2 : 0;

    const totalScore = lengthScore + lettersScore + numbersScore + specialCharsScore;

    return totalScore;
  };

  const [passwordLength, setPasswordLength] = useState(12);
  const [useLetters, setUseLetters] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSpecialChars, setUseSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handlePassword = () => {
    const password = generatePassword(passwordLength, useLetters, useNumbers, useSpecialChars);
    setGeneratedPassword(password);
    const securityScore = measureSecurity(password);
    console.log(`Seguridad de la contraseña: ${securityScore}`);
  };

  const handleLengthChange = (e) => {
    const length = parseInt(e.target.value, 10);
    setPasswordLength(length);
  };

  const handleLettersChange = () => {
    setUseLetters(!useLetters);
  };

  const handleNumbersChange = () => {
    setUseNumbers(!useNumbers);
  };

  const handleSpecialCharsChange = () => {
    setUseSpecialChars(!useSpecialChars);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword)
      .then(() => alert('Contraseña copiada'))
      .catch((err) => console.error('Error al copiar al portapapeles:', err));
  };

  return (
    <div>
      <Navbar />
      <div className='container-fluidx'>
        <h2>Generador de Contraseñas</h2>
        <label>
          Longitud de la contraseña:
          <input type="number" value={passwordLength} onChange={handleLengthChange} min={4} max={64} />
        </label>
        <div>
          <label>
            Letras:
            <input type="checkbox" checked={useLetters} onChange={handleLettersChange} />
          </label>
          <label>
            Números:
            <input type="checkbox" checked={useNumbers} onChange={handleNumbersChange} />
          </label>
          <label>
            Caracteres especiales:
            <input type="checkbox" checked={useSpecialChars} onChange={handleSpecialCharsChange} />
          </label>
        </div>
        <button type="button" onClick={handlePassword}>Generar</button>
        <div>
          <center>Contraseña generada:</center>
          <input type="text" value={generatedPassword} readOnly />
          <button type="button" onClick={handleCopyToClipboard}><i className='bx bx-copy'></i></button>
        </div>
      </div>
    </div>
  );
}
