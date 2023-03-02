# CardanoMusicPlayer
An audio player developed for Music NFT's on Cardano. This implementation will work for other chains, as well.


Changes were made to improve user experience related to my NFT album's (Necksmile - Traverse) final format.

That can be previewed at https://pool.pm/8f09ab4a95abb703f6e8409ea42364be3e77cee66f6b46f6437d0c59.NecksmileTraverse00001

&

https://tokhun.io/explore/8f09ab4a95abb703f6e8409ea42364be3e77cee66f6b46f6437d0c59.4e65636b736d696c6554726176657273653030303236

You can reverse engineer one of the index files to learn how the JS is being implemented.


Raw metadata for learning how the contents are referenced by the chain and explorers:

{
    "asset": "8f09ab4a95abb703f6e8409ea42364be3e77cee66f6b46f6437d0c594e65636b736d696c6554726176657273653030303236",
    "policy_id": "8f09ab4a95abb703f6e8409ea42364be3e77cee66f6b46f6437d0c59",
    "asset_name": "4e65636b736d696c6554726176657273653030303236",
    "fingerprint": "asset1ep4pzge6f4nvnfl8tlxkn63twkwaczv564f0aj",
    "quantity": "1",
    "initial_mint_tx_hash": "83fba443244ae473b1c46fe99a9cca98aa48d7bcf01d26e36b7aa8747a13a1cb",
    "mint_or_burn_count": 1,
    "onchain_metadata": {
        "name": "Traverse by Necksmile [00026]",
        "Album": "Traverse",
        "files": [
            {
                "src": "ipfs://QmTQsoB9VqGnwjm35VMS2m6ycKVREwa6E2S84gEh8h81Ef",
                "mediaType": "text/html"
            }
        ],
        "image": "ipfs://QmScNBjnJ7SF7zBf95DXC1RpETBmB9i71tSgAwzkM3jrjD",
        "Artist": "Necksmile",
        "Website": "https://ChrisHockaday.com",
        "Copyright": "2021 Necksmile. All rights reserved.",
        "mediaType": "image/png"
    },
    "onchain_metadata_standard": "CIP25v1",
    "metadata": null
}
