# Hook Email

[Husky](https://github.com/typicode/husky) hook for checking author email address.
It may be used if you want to be ensure that your commits are only from specific email address.

## Installation

```
npm i hook-email --dev
```

## Usage

Just add it to your `.huskyrc` file:

```
{
  "hooks": {
    "pre-commit": "npm run hook-email your-domain.com"
  }
}
```
