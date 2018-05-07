module.exports = {
  accountBalance: 'account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-balance
  accountBlockCount: 'account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-block-count
  accountCreate: 'wallet work', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-create
  accountsCreate: 'wallet count work', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#accounts-create
  accountGet: 'key', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-get
  accountHistory: 'hash count', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-history
  accountInfo: 'account representative weight pending', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-info
  accountKey: 'account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-key
  accountList: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-list
  accountMove: 'wallet source accounts', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-move
  accountRemove: 'wallet account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-remove
  accountRepresentative: 'account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-representative
  accountRepresentativeSet: 'wallet account representative work', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol##account-representative-set
  accountWeight: 'account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#account-weight
  accountsBalances: 'accounts', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#accounts-balances
  accountsFrontiers: 'accounts', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#accounts-frontiers
  accountsPending: 'accounts count threshold source', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#accounts-pending
  availableSupply: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#available-supply
  block: 'hash', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#retrieve-block
  blockCreate: 'type key account representative source wallet previous destination balance amount work', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#offline-signing-create-block
  blocks: 'hashes', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#retrieve-multiple-blocks
  blocksInfo: 'hashes pending source', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#retrieve-multiple-blocks-with-additional-info
  blockAccount: 'hash', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#block-account
  blockCount: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#block-count
  blockCountType: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#block-count-by-type
  bootstrap: 'address port', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#bootstrap
  bootstrapAny: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#multi-connection-bootstrap
  chain: 'block count', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#chain
  delegators: 'account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#delegators
  delegatorsCount: 'account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#delegators-count
  deterministicKey: 'seed index', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#deterministic-key
  frontiers: 'account count', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#frontiers
  frontierCount: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#frontier-count
  history: 'hash count', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#history
  keepalive: 'address port', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#keepalive
  keyCreate: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#key-create
  keyExpand: 'key', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#key-expand
  ledger: 'account count representative weight pending sorting', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#ledger
  passwordChange: 'wallet password', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-change-password
  passwordEnter: 'wallet password', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-password-enter-unlock-wallet
  passwordValid: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-valid-password
  paymentBegin: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#payment-begin
  paymentInit: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#payment-init
  paymentEnd: 'account wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#payment-end
  paymentWait: 'account amount timeout', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocolpayment-wait
  peers: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#peers
  pending: 'account count threshold source', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#pending
  pendingExists: 'hash', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#pending-exists
  process: 'block', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#process-block
  receive: 'wallet account block work', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#receive
  receiveMinimum: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#receive-minimum
  receiveMinimumSet: 'amount', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#receive-minimum-set
  representatives: 'count sorting', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#representatives
  republish: 'hash sources destinations',  // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#republish
  send: 'wallet source destination amount work', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#send
  stop: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol##stop-node
  successors: 'block count', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol##successors
  searchPending: 'wallet',  // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#search-pending
  searchPendingAll: '',  // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#search-pending-all
  unchecked: 'count', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#uncheked-blocks
  uncheckedClear: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#clear-unchecked-blocks
  uncheckedGet: 'hash', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#retrieve-unchecked-block
  uncheckedKeys: 'key count', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#uncheked-blocks-with-database-keys
  validateAccountNumber: 'account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#validate-account-number-checksum
  version: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#version
  walletAdd: 'wallet key work', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-add
  walletBalances: 'wallet threshold', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-balances
  walletBalanceTotal: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-total-balance
  walletChangeSeed: 'wallet seed', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-change-seed
  walletContains: 'wallet account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-contains
  walletCreate: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-create
  walletDestroy: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-destroy
  walletExport: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-export
  walletFrontiers: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-frontiers
  walletLocked: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-locked-check
  walletPending: 'wallet count threshold source', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-pending
  walletRepresentative: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-representative
  walletRepresentativeSet: 'wallet representative', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol##wallet-representative-set
  walletRepublish: 'wallet count', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-republish
  walletWorkGet: 'wallet', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#wallet-work-get
  workCancel: 'hash', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#work-cancel
  workGenerate: 'hash', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#work-generate
  workGet: 'wallet account', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#work-get
  workSet: 'wallet account work', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#work-set
  workPeerAdd: 'address port', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#add-work-peer
  workPeers: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#retrieve-work-peers
  workPeersClear: '', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#clear-work-peers
  workValidate: 'work hash', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#work-validate
  mraiFromRaw: 'amount', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#mrai-from-raw
  mraiToRaw: 'amount', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#mrai-to-raw
  kraiFromRaw: 'amount', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#krai-from-raw
  kraiToRaw: 'amount', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#krai-to-raw
  raiFromRaw: 'amount', // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#rai-from-raw
  raiToRaw: 'amount' // https://github.com/clemahieu/raiblocks/wiki/RPC-protocol#rai-to-raw
}
