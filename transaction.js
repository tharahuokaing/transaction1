(() => {
    "use strict";

    /* =========================================================
       LEDGER TRANSACTION SYSTEM SIMULATED REGISTRY
    ========================================================= */
    const TRANSACTION_REGISTRY = [
        { id: "TXN-KN-90218", party: "Acc...90218 (SvayMetrey)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90219", party: "Acc...90219 (ChornRothanak)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90220", party: "Acc...90220 (ChumchanRothanak)", network: "Real-time Gross Settlement", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90221", party: "Acc...90221 (LongLain)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90222", party: "Acc...90222 (PhaychanRothana)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90223", party: "Acc...90223 (HuokaingThara)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90224", party: "Acc...90224 (SanSopheata)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90225", party: "Acc...90225 (SamsoDavin)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },    
        { id: "TXN-KN-90226", party: "Acc...90226 (Leda)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },      
        { id: "TXN-KN-90227", party: "Acc...90227 (Thorn)", network: "Bakong API Link", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90228", party: "Acc...90228 (Vanneat)", network: "FAST Clearing Node", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90229", party: "Acc...90229 (Mengly)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "10:07:00", status: "Pending" },
        { id: "TXN-KN-90230", party: "Acc...90230 (Leyu)", network: "National Clearing House", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90231", party: "Acc...90231 (Sengchhat)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "16:25:00", status: "Pending" },      
        { id: "TXN-KN-90232", party: "Acc...90232 (Do)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90233", party: "Acc...90233 (Jav)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90234", party: "Acc...90234 (Kimmuy)", network: "Bakong Transfer Sweep", direction: "outflow", amount: 10000000.00, time: "01:01:01", status: "Success" },
        { id: "TXN-KN-90235", party: "Acc...90235 (Dom)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90237", party: "Acc...90327 (Chansamnang)", network: "Real-time Gross Settlement", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90238", party: "Acc...90238 (Nouvichaka)", network: "Real-time Gross Settlement", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90239", party: "Acc...90239 (Men)", network: "Interbank ISO Gateway", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90240", party: "Acc...90240 (Sok Rachana)", network: "Interbank ISO Gateway", direction: "pending", amount: 0.00, time: "15:55:00", status: "Pending" },
        { id: "TXN-KN-90241", party: "Acc...90241 (Sok Khemera)", network: "Interbank ISO Gateway", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90242", party: "Acc...90242 (Huo)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },      
        { id: "TXN-KN-90243", party: "Acc...90423 (Khen Lyda)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90244", party: "Acc...90244 (B)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90245", party: "Acc...90245 (Huokaing Tharoth)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },      
        { id: "TXN-KN-90246", party: "Acc...90246 (Tek Hy)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },      
        { id: "TXN-KN-90247", party: "Acc...90247 (Phann)", network: "Retail Mobile Gateway", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90248", party: "Acc...90247 (Vichaka)", network: "Retail Mobile Gateway", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },
        { id: "TXN-KN-90249", party: "Acc...90246 (Nita)", network: "Bakong Transfer Sweep", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" },      
        { id: "TXN-KN-90250", party: "Acc...90247 (Raem)", network: "Retail Mobile Gateway", direction: "pending", amount: 0.00, time: "00:00:00", status: "Pending" }
    ];

    let currentFilter = "all";
    let searchQuery = "";

    /* =========================================================
       CALCULATION & ANALYTICS PIPELINES
    ========================================================= */
    function recalculatePipelineSummary() {
        const totalVolume = TRANSACTION_REGISTRY
            .filter(tx => tx.status === "Success")
            .reduce((sum, tx) => sum + tx.amount, 0);

        const pendingCount = TRANSACTION_REGISTRY
            .filter(tx => tx.status === "Pending").length;

        const volEl = document.getElementById("totalVolumeText");
        const pendEl = document.getElementById("pendingCountText");

        if (volEl) volEl.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalVolume);
        if (pendEl) pendEl.textContent = pendingCount.toString();
    }

    /* =========================================================
       DATA TRANSFORMATION & RENDER ENGINES
    ========================================================= */
    function renderLedgerMatrix() {
        const tbody = document.getElementById("transactionTableBody");
        if (!tbody) return;

        // Apply visual logic constraints based on application search filter parameters
        const datasets = TRANSACTION_REGISTRY.filter(tx => {
            const matchesTab = (currentFilter === "all") || (tx.direction === currentFilter) || (currentFilter === "pending" && tx.status === "Pending");
            const matchesSearch = tx.id.toLowerCase().includes(searchQuery) || tx.party.toLowerCase().includes(searchQuery) || tx.network.toLowerCase().includes(searchQuery);
            return matchesTab && matchesSearch;
        });

        if (datasets.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#64748b; padding:30px;">No records identified matching pipeline parameters.</td></tr>`;
            return;
        }

        tbody.innerHTML = datasets.map(tx => {
            const displayAmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tx.amount);
            const classDirection = tx.direction === "pending" ? "txt-pending" : "txt-pending";
            const badgeState = tx.status.toLowerCase();

            return `
                <tr>
                    <td style="font-weight:600; color:#38bdf8;">${tx.id}</td>
                    <td>${tx.party}</td>
                    <td style="color:#94a3b8;">${tx.network}</td>
                    <td><span class="direction-badge">${tx.direction.toUpperCase()}</span></td>
                    <td class="${classDirection}">${tx.direction === "pending" ? "+" : "-"}${displayAmt}</td>
                    <td style="color:#64748b;">${tx.time}</td>
                    <td><span class="badge ${badgeState}">${tx.status}</span></td>
                </tr>
            `;
        }).join("");
    }

    /* =========================================================
       EVENT SUBSCRIPTIONS ENGINE BINDINGS
    ========================================================= */
    document.addEventListener("DOMContentLoaded", () => {
        recalculatePipelineSummary();
        renderLedgerMatrix();

        // Search execution keyup hook bindings
        const searchInput = document.getElementById("txSearchInput");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                renderLedgerMatrix();
            });
        }

        // Processing workflow tabs controls click parameters execution mapping
        const tabGroup = document.getElementById("filterTabsGroup");
        if (tabGroup) {
            tabGroup.addEventListener("click", (e) => {
                const button = e.target.closest(".tab-btn");
                if (!button) return;

                tabGroup.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                currentFilter = button.getAttribute("data-filter");
                renderLedgerMatrix();
            });
        }

        // Force manual execution pipeline refresh system triggers simulation
        document.getElementById("refreshTxBtn")?.addEventListener("click", () => {
            console.log("[TRANSACTION ARCHITECTURE] Flushing transaction clearing pipeline logs...");
            recalculatePipelineSummary();
            renderLedgerMatrix();
        });

        // Export data engine simulation hook bindings
        document.getElementById("exportLedgerBtn")?.addEventListener("click", () => {
            alert("Ledger structure compiled successfully. Initializing local database stream transmission...");
        });
    });

})();
