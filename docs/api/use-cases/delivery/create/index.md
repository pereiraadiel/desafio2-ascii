<h1 align='center'>Desafio 2 API</h1>

<h2 align='center'>Criar Delivery</h2>

<br/>

### <p style='color: #0d9; font-weight: bold;'>Endpoints</p>

- #### <p style='font-weight: bold;'>POST => /api/deliverys</p>
  ```bash
    # Esperado no corpo da requisição
    $name : string
    $weight : number
    $address : {
      $streetAddress: string
      $number: string | number
      $neighborhood: string
      $referential: string
      $city: string
      $state: string
      $country: string
      $geo: {
        $lat: number
        $log: number
      }
    }

    # Deverá ser retornado
    $status = 201

    # Possíveis erros
    $status = 400
    $error: string
  ```
