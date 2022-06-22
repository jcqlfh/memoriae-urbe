<Dialog fullscreen bind:active>
    <Card>
        <CardTitle>
            <Row>
                <Col>
                    <h4>Como Jogar</h4>
                </Col>
                <Col class="display-flex justify-end">
                    <Button on:click={() => showHowToPlay.set(false)} icon><Icon path="{mdiClose}"/></Button>
                </Col>
            </Row>
        </CardTitle>
        <CardText>
            <Row>
                <Col>
                    <p>
                        Jogar este jogo é muito simples. Primeiro você deve escolher uma cidade
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul class="grid">
                        <li class="city shadow"><a>Fortaleza</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        A cidade é cheia de locais interessantes para conhecer. No entanto, esses locais estão escondidos. Você precisa escolher um para começar a procurá-lo 
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul class="grid">
                        <li class="place shadow"><a>Lugar #1</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Cada lugar tem uma pista. Você precisa desvendar essa pista para descobrir o lugar. Pra ter certeza, você vai precisar visitá-lo. Ao chegar la´, pode ser que você encontre um QR Code, igual a esse que você descobriu o jogo.
                    </p>   
                </Col>             
            </Row>
            <Row>
                <Col>
                    <ul class="grid">
                        <li><img src="/images/qr-code.svg"></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Pronto! Quando escanear o QR Code, você tera acertado o lugar e, de quebra, um conteúdo de um grande artista da cidade.
                    </p>
                    <p>
                        Fica atento. O Primeiro pode estar perto de você
                    </p>   
                </Col>             
            </Row>
        
        </CardText>
        <CardActions class="justify-end">
            <Button on:click={() => showHowToPlay.set(false)} text>Fechar<Icon path="{mdiClose}"/></Button>
        </CardActions>
    </Card>
</Dialog>

<script lang="ts">
    import {
        Button,
        Dialog,
        Card,
        CardTitle,
        CardText,
        CardActions,
        Row,
        Col,
        Icon
    } from 'svelte-materialify';
    import { mdiClose } from '@mdi/js';
    import { showHowToPlay } from '../state/showHowToPlay';

    export let active = false;

</script>